import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-interview-app');

  messageFromChild =''
  getMassageFromChild(massage: string) {
    this.messageFromChild = massage

  }
}
