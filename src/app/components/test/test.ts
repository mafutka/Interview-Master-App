
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule],
   standalone: true,
  templateUrl: './test.html',
  styleUrls: ['./test.scss'],
})
export class TestComponent implements OnInit {
  newTask: string = '';
  tasks: string[] = []

  constructor () {} 

  private todoService = inject(TodoService);

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks()
  }

  addTask() {
    if(this.newTask.trim() !== '')
      this.todoService.addTask(this.newTask.trim());
    this.newTask = '';
    this.updateTasks()
  }

  removeTask(index: number){
this.todoService.removeTask(index)
this.updateTasks()
  }
  private updateTasks(){
    this.tasks = this.todoService.getTasks();
  }
}
