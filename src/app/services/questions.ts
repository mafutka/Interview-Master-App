import { Injectable } from '@angular/core';
import { QUESTIONS } from '../data/questions';

@Injectable({
  providedIn: 'root',
})
export class Questions {
  getAll() {
    return QUESTIONS;
  }

  getByCategory(category: string) {
    return QUESTIONS.filter(q => q.category === category);
  }
}
