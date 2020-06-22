import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { toDoListWithIcons, toDoList } from '../model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  updateSearched$ = new Subject();

  constructor(private http: HttpClient) { }

  private listUrl = 'api/toDoList';
  public toDoList:toDoListWithIcons[];

  getToDoList(request:string, detail?:string): Observable<any> {
    return this.http.get<toDoListWithIcons[]>(this.listUrl)
      .pipe(
        map( (items) => {
          const toDoListData = items.reverse();
          for ( const item of toDoListData ) {
            item.important_icon = item.important ? 'error' : 'error_outline';
            item.stared_icon = item.stared ? 'star' : 'star_border';
            item.done_icon = item.done ? 'check_box' : 'crop_square';
          }
          this.toDoList = toDoListData;
          if ( request === 'all') {
            return this.toDoList;
          } else {
            return this.getFilterData(detail);
          }
        })
      );
  }


  getFilterData(detail:string) {
    const matchFilter = this.toDoList.filter( (item) => {
      return item[ `${detail}`] === 1 || item[ `${detail}`] === true;
    });

    return this.toDoList = matchFilter;
  }

  getToDoItem(id:string) {
    return this.getSelectedItem(this.toDoList, id);
  }

  getSelectedItem(list:toDoListWithIcons[], id:string) {
    return  list.filter( (item) => {
      return item.id === id;
    });
  }

  addToDoItem( item:toDoList): Observable<any> {
    const latestId = this.toDoList[0].id;
    item.id = (parseInt(latestId, 10) + 1).toString();
    item.content = item.content || '';
    item.frontend = item.frontend || 0;
    item.backend = item.backend || 0;
    item.issue = item.issue || 0;
    item.important = item.important || 0;
    item.stared = item.stared || 0;
    item.done = item.done || 0;
    return this.http.post(this.listUrl, item, httpOptions);
  }

  updateToDoItem(item:toDoList): Observable<any> {
    return this.http.put(this.listUrl, item, httpOptions);
  }

  updateSearched(items:toDoListWithIcons[]) {
    this.updateSearched$.next(items);
  }

}
