import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

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
  public toDoList: any;

  getToDoList(request, detail?): Observable<any> {
    return this.http.get<any>(this.listUrl)
      .pipe(
        map( (items) => {
          this.toDoList = items.reverse();
          for ( const item of this.toDoList ) {
            item.important_icon = item.important ? 'error' : 'error_outline';
            item.stared_icon = item.stared ? 'star' : 'star_border';
            item.done_icon = item.done ? 'check_box' : 'crop_square';
          }
          if ( request === 'all') {
            return this.toDoList;
          } else {
            return this.getFilterData( detail);
          }
        })
      );
  }


  getFilterData(detail) {
    const matchFilter = this.toDoList.filter( (item) => {
      return item[ `${detail}`] === 1 || item[ `${detail}`] === true;
    });

    return this.toDoList = matchFilter;
  }

  getToDoItem(id) {
    return this.getSelectedItem(this.toDoList, id);
  }

  getSelectedItem(list, id) {
    return  list.filter( (item) => {
      return item.id === id;
    });
  }

  addToDoItem( item ): Observable<any> {
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

  updateToDoItem(item): Observable<any> {
    return this.http.put(this.listUrl, item, httpOptions);
  }

  updateSearched(items) {
    this.updateSearched$.next(items);
  }

}
