import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCard } from '../question-card/question-card';


@Component({
  selector: 'app-list',
  imports: [CommonModule, QuestionCard],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
   questions = [
    { id: 1, title: 'What is Angular?', difficulty: 'easy', category: 'Angular' },
    { id: 2, title: 'What is dependency injection?', difficulty: 'medium', category: 'Angular' },
    { id: 3, title: 'Explain closures in JS', difficulty: 'hard', category: 'JavaScript' }
  ];
}
