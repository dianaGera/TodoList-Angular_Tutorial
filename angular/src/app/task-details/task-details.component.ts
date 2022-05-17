import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TASKS } from '../task_list';
import { Task } from '../Task';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.sass']
})
export class TaskDetailsComponent implements OnInit {

  tasks: Task[] = TASKS
  selectedTask!: Task
  faBars = faBars
  faXmark = faXmark

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
    console.log('selected')
  }

}
