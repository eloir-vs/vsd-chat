import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ReceiverService } from '../services/receiver.service';
import { Message } from '../entity/message';

@Component({
  selector: 'app-log-area',
  standalone: true,
  imports: [],
  templateUrl: './log-area.component.html',
  styleUrl: './log-area.component.sass'
})
export class LogAreaComponent implements OnInit{
  messages: Message[] = [];

  constructor(private receiverService: ReceiverService) {
  }
  ngOnInit() {
    this.messages.push({from: 'System', message: 'Welcome to the chat', time: new Date()});
    this.receiverService.messages$.subscribe((messages) => {
      const firstMessage = this.messages[0];
      this.messages = [firstMessage, ...messages];
    });
  }


}

