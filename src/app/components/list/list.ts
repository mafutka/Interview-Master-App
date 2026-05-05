import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCard } from '../question-card/question-card';
import { Questions } from '../../services/questions';


@Component({
  selector: 'app-list',
  imports: [CommonModule, QuestionCard],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {
    @Input() category!: string;

  questions: any[] = [];

  constructor(private qs: Questions) {}

  ngOnInit() {
    this.questions = this.qs.getByCategory(this.category);
  }
}
