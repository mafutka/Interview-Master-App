
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
   standalone: true,
  templateUrl: './test.html',
  styleUrls: ['./test.scss'],
})
export class TestComponent {
 complexForm = new FormGroup({
  name:new FormControl('', [Validators.required , Validators.minLength(2)]),
  email: new FormControl('', [Validators.required, Validators.email])
 })
 get name() {
  return this.complexForm.get('name');
}

get email() {
  return this.complexForm.get('email');
}

 onSubmit() {}
}
