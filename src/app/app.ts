import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test';
import { List } from './components/list/list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent, List],
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
