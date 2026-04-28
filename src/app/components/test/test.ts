import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
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
  @Output() messageFromChild =new EventEmitter<String>()

  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`
  }
  toggleState() {
this.isClickState = true
  }

  sendMassageToPArent() {
    this.messageFromChild.emit('Imyourson')
  }
}
