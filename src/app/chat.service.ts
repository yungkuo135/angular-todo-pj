import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor() { }

  chatList = [
      {
        id: 1,
        name: 'Alice',
        online: 1,
        unread: 2,
        avatar: 'assets/Alice.jpg',
        // tslint:disable-next-line: max-line-length
        chat:  ['Alice|你好啊|1575166257000|assets/Alice.jpg', 'Alice|上次提到的事情不知道如何呢?|1575166265000|assets/Alice.jpg',
                'Yung|HI 你好啊 還不錯啊 你呢?|1575166280000|assets/Arnold.jpg', 'Alice|也還可以囉 有件事想請你幫忙|1575166295000|assets/Alice.jpg'
                // tslint:disable-next-line:max-line-length
                , 'Alice|你可以幫我探聽一下隔壁部門他們的下午茶跟誰訂的嗎?|1575166300000|assets/Alice.jpg', 'Alice|我覺得好好吃喔|1575166305000|assets/Alice.jpg'
                , 'Alice|哈哈哈|1575166310000|assets/Alice.jpg', 'Yung|真的不錯吃耶|1575166330000|assets/Alice.jpg']
      },
      {
        id: 1,
        name: 'Arnold',
        online: 1,
        unread: 0,
        avatar: 'assets/Arnold.jpg',
                // tslint:disable-next-line: max-line-length
        chat:  ['Alice|你好啊|1575166257000|assets/Arnold.jpg', 'Alice|上次提到的事情不知道如何呢?|1575166265000|assets/Arnold.jpg',
                'Yung|HI 你好啊 還不錯啊 你呢?|1575166280000|assets/Arnold.jpg', 'Alice|也還可以囉 有件事想請你幫忙|1575166295000|assets/Arnold.jpg'
                ]
      },
      {
        id: 1,
        name: 'Barrera',
        online: 1,
        unread: 5,
        avatar: 'assets/Barrera.jpg',
                // tslint:disable-next-line: max-line-length
        chat:  ['Alice|你好啊|1575166257000|assets/Barrera.jpg', 'Alice|上次提到的事情不知道如何呢?|1575166265000|assets/Barrera.jpg',
                'Yung|HI 你好啊 還不錯啊 你呢?|1575166280000|assets/Barrera.jpg']
      },
      {
        id: 1,
        name: 'Copeland',
        online: 1,
        unread: 1,
        avatar: 'assets/Copeland.jpg',
                // tslint:disable-next-line: max-line-length
        chat:  ['Alice|你好啊|1575166257000|assets/Copeland.jpg', 'Alice|上次提到的事情不知道如何呢?|1575166265000|assets/Alice.jpg',
                'Yung|HI 你好啊 還不錯啊 你呢?|1575166280000|assets/Copeland.jpg', 'Alice|也還可以囉 有件事想請你幫忙|1575166295000|assets/Copeland.jpg']
      },
      {
        id: 1,
        name: 'Adam',
        online: 1,
        unread: 3,
        avatar: 'assets/Harper.jpg',
                // tslint:disable-next-line: max-line-length
        chat:  ['Alice|你好啊|1575166257000|assets/Harper.jpg', 'Alice|上次提到的事情不知道如何呢?|1575166265000|assets/Harper.jpg',
                'Yung|HI 你好啊 還不錯啊 你呢?|1575166280000|assets/Harper.jpg', 'Alice|也還可以囉 有件事想請你幫忙|1575166295000|assets/Harper.jpg']
      },

    ];

    updateChat(name, content, time) {

    for (const eachChat of this.chatList) {
        if ( name === eachChat.name ) {
          eachChat.chat.push(`Yung|${content}|${time}`);
          }
      }
    }



}
