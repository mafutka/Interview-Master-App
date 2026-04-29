import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective} from '../../directives/highlight'

@Component({
  selector: 'app-test',
  imports: [CommonModule, HighlightDirective],
  templateUrl: './test.html',
  styleUrls: ['./test.scss'],
})
export class TestComponent {
  title = 'Its interpolation'
  firstName = 'Maria'
  lastName = 'Skobeleva'

  isEnable: boolean = false

  isActive: boolean = true
  isDisabled: boolean = false

  isClickState: boolean = false
  users= ['Alina', 'Petya', 'Valia',  'Sasha']
  items =[
   { "id": 1,
    "name": 'apple',},
     { "id": 2,
    "name": 'pear',},
     { "id": 3,
    "name": 'cherry',},
     { "id": 4,
    "name": 'grapes'}
    ]

  appState ='paused'
@Output() messageFromChild = new EventEmitter<string>()

  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`
  }
  toggleState() {
this.isClickState = true
  }

  sendMessageToParent() {
    this.messageFromChild.emit('Imyourson')
  }
}
