import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ToDoModule } from './to-do/to-do.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ToDoModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
