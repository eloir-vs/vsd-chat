import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SenderService } from '../services/sender.service';


@Component({
  selector: 'app-input-area',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input-area.component.html',
  styleUrl: './input-area.component.sass'
})
export class InputAreaComponent {
  username  = new FormControl('', []);
  messageInput = new FormControl('', []);

  constructor(private senderService: SenderService) {

  }

  connect() {
    const usernameValue = this.username.value || '';
    if(usernameValue?.length > 3){
      this.senderService.connect(usernameValue);
    }
  }

  async sendMessage() {
    const message = this.messageInput.value;
    await this.senderService.send(message + '');
  }
}
