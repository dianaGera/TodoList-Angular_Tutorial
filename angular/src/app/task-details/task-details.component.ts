import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../services/task.service';
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

  is_hidden: boolean = true

  faBell = faBell
  faXmark = faXmark
  faBarsStaggered = faBarsStaggered

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
    this.is_hidden = !this.is_hidden
  }

  setReminder(task: Task) {
    this.setReminderEvent.emit(task)
  }

  onDelete(value: Task) {
    this.deleteTaskEvent.emit(value);
  }

  onUpdateTask(data: any) {
    data.task.text = data.title
    data.task.day_added = data.day
    this.is_hidden = true
    this.taskService.updateTaskContent(data.task).subscribe();
  }
}

