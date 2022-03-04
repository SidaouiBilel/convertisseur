import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { LiveChatService } from '../service/live-chat.service';

@Component({
  selector: 'live-chat-component',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit, OnDestroy {
  myMessages: Message[] = [];
  myEventSource: EventSource;
  sub: Subscription;
  constructor(private liveChatService: LiveChatService) {}

  ngOnDestroy(): void {
    this.myEventSource?.close();
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.myEventSource = this.liveChatService.getLiveChat();
    const myEvent = fromEvent<MessageEvent>(this.myEventSource, 'message');

    this.sub = myEvent.subscribe((msg: MessageEvent) => {
      const data: Message = JSON.parse(msg?.data) as Message;
      this.myMessages.push(data);
    });
  }
}

interface Message {
  time: string;
  author: string;
  text: string;
}
