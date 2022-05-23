import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task'


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.sass']
})
export class CreateTaskComponent implements OnInit {

  @Output() createTaskEvent: EventEmitter<Task> = new EventEmitter();

  @Input() btn?: string;
  id: number = 0
  task: string = '';
  date = new Date();
  reminder: boolean = false


  constructor() { }

  ngOnInit(): void {
  }

  onCreateTask() {
    if (this.task !== '') {
      const newTask: Task = {
      id!: this.id,
      text: this.task,
      day_added: this.date.toISOString().slice(0, 16),
      reminder: this.reminder
    }
    this.createTaskEvent.emit(newTask)
    this.task = ''
    } else {
      alert('Enter a valid content')
    }
  }

}
