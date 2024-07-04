import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogAreaComponent } from './log-area/log-area.component';
import { InputAreaComponent } from './input-area/input-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogAreaComponent, InputAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'vsd-chat';
}
