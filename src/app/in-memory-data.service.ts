import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { toDoList } from './model'

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const toDoList:toDoList[] = [
        {
          id: '1',
          title: '一的長不路的',
          content: '境著企果，未方而的際其電好評或文音此持是蘭話問不雙銀酒月知！痛收黃生重熱重的展去分了人，利面中器中大製打人哥張故集。',
          frontend: 0,
          backend: 1,
          issue: 0,
          important: 0,
          stared: 0,
          done: 0
        },
        {
          id: '2',
          title: '看步夜親法日有式其港病的食點是說地子了！',
          content: '的斯熱活表庭中事',
          frontend: 1,
          backend: 0,
          issue: 0,
          important: 1,
          stared: 0,
          done: 0
        },
        {
          id: '3',
          title: '一的長不路的',
          content: '境著企果，未方而的際其電好評或文音此持是蘭話問不雙銀酒月知！痛收黃生重熱重的展去分了人，利面中器中大製打人哥張故集。',
          frontend: 0,
          backend: 1,
          issue: 0,
          important: 0,
          stared: 0,
          done: 1
        },
        {
          id: '4',
          title: '本選景應小作平學',
          content: '境著企果，未方而的際其電好評或文音此持是蘭話問不雙銀酒月知！痛收黃生重熱重的展去分了人，利面中器中大製打人哥張故集。',
          frontend: 1,
          backend: 0,
          issue: 0,
          important: 0,
          stared: 1,
          done: 0
        },
        {
          id: '5',
          title: '的斯熱活表庭中事',
          content: '的本費斷。子座生物。減遊面後爸上物保上投家！親的解蘭世陸重統內何。過說說問示大言',
          frontend: 1,
          backend: 0,
          issue: 1,
          important: 1,
          stared: 1,
          done: 1
        },
        {
          id: '6',
          title: '四個標題',
          content: '走西他白的不安心這上建？致大後性安想久主試己了……禮畫次治失孩……分以沒死行的運元突自到要完是學止',
          frontend: 1,
          backend: 0,
          issue: 0,
          important: 0,
          stared: 0,
          done: 0
        },
        {
          id: '7',
          title: '這是三個',
          content: '境著企果，未方而的際其電好評或文音此持是蘭話問不雙銀酒月知！痛收黃生重熱重的展去分了人，利面中器中大製打人哥張故集。',
          frontend: 0,
          backend: 0,
          issue: 1,
          important: 0,
          stared: 0,
          done: 1
        },
        {
          id: '8',
          title: '第二個標題',
          content: '別頭一生，四布法樹最會我價方產那有好子康，次別科主備農位們中、點物銀意紙分他觀客破不正',
          frontend: 0,
          backend: 1,
          issue: 0,
          important: 1,
          stared: 0,
          done: 0
        },
        {
          id: '9',
          title: '這是標題',
          content: '接前部道下現看自，人低與……最建一兩究求見車亞庭母命不媽不李要致險，更畫最學。學都因發天智吃來了大可整公利入大除立院理，家出斯先適府程；少溫約北急在效笑引較山心他過條在。',
          frontend: 1,
          backend: 1,
          issue: 0,
          important: 1,
          stared: 1,
          done: 0
        },
    ];
    return {toDoList};
  }
}
