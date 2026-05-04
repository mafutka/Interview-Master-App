import { Component, signal } from '@angular/core';
import { TestComponent } from './components/test/test';
import { List } from './components/list/list';


@Component({
  selector: 'app-root',
  imports: [ TestComponent, List],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponennt {
  protected readonly title = signal('angular-interview-app');

  messageFromChild =''
  getMassageFromChild(massage: string) {
    this.messageFromChild = massage

  }
}
