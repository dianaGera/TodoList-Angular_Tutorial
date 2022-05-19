import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { faBell, faXmark, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.sass']
})
export class TaskDetailsComponent implements OnInit {

  @Output() deleteTaskEvent = new EventEmitter();
  @Output() setReminderEvent = new EventEmitter()

  @Input() tasks?: Task[];



  selectedTask?: Task
  selectedReminder?: Task

  is_selectedReminder ?: boolean
  is_hidden: boolean = true

  faBell = faBell
  faXmark = faXmark
  faBarsStaggered = faBarsStaggered

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
    this.is_hidden = !this.is_hidden
  }

  setReminder(task: Task) {
    this.is_selectedReminder = !this.is_selectedReminder
    this.selectedReminder = task
  }

  onDelete(value: Task) {
    this.deleteTaskEvent.emit(value);
  }
}

