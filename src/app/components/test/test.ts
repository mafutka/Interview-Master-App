import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrls: ['./test.scss'],
})
export class TestComponent {
  title = 'Its interpolation'
  firstName = 'Maria'
  lastName = 'Skobeleva'

  getFullName() {
    return
  }
}
