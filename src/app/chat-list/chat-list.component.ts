import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state , style, animate, transition } from '@angular/animations';
import { ChatService } from '../chat.service';
import { chatList } from '../model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
  animations: [
    trigger('toggleChatPanel', [
      state('open', style({
        right: '0px',
      })),
      state('closed', style({
        right: '-291px',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class ChatListComponent implements OnInit {

  public chatList: Array<any>;
  public isChatOpened = false;
  public isSelectedChat = false;
  public chatingAvatar: string;
  public chattingName: string;
  public chatHistory: string;
  public me = false;
  public dialog: Array<any> = [];

  @ViewChild('chat_content', {static: false})
  chat_content: ElementRef;
  @ViewChild('chatInput', {static: false})
  chatInput: ElementRef;

  constructor(public chatService: ChatService) { }

  ngOnInit() {

  }

  toggleChat() {
    this.isChatOpened = !this.isChatOpened;
    this.isSelectedChat = false;
    if ( !this.isChatOpened ) {
      this.dialog = [];
    }
  }

  selectChat( chat:chatList, event) {
    if (!this.isSelectedChat && !this.isChatOpened) {
      this.toggleChat();
    }
    chat.unread = 0;
    this.dialog = [];
    this.isSelectedChat = true;
    this.chatingAvatar = chat.avatar;
    this.chattingName = chat.name;

    this.processChat(chat.chat);

    setTimeout(() => {
      this.chat_content.nativeElement.scrollTop = this.chat_content.nativeElement.scrollHeight;
    }, 0);
  }

  processChat(chatHistory:string[]) {
    this.dialog = [];
    for (const line of chatHistory ) {
      const name = line.split('|')[0];
      const content = line.split('|')[1];
      const timestamp = parseInt(line.split('|')[2], 10);
      const avatar =  name === 'Yung' ? null : line.split('|')[3];
      const time = new Date(timestamp).toLocaleString();
      this.dialog.push({name, content, time, avatar});
    }
  }

  sendChat(event) {

    const content = this.chatInput.nativeElement.value;
    const time = new Date().getTime();

    if (content === '') { return; }

    this.chatService.updateChat(this.chattingName, content, time);

    const updatedChat = this.chatService.chatList.filter( (eachChat) => {
      return eachChat.name === this.chattingName;
    });


    this.processChat(updatedChat[0].chat);
    setTimeout(() => {
      this.chat_content.nativeElement.scrollTop = this.chat_content.nativeElement.scrollHeight;
    }, 0);

    this.chatInput.nativeElement.value = '';

  }

}
