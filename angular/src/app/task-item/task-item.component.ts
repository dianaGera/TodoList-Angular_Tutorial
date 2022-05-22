import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit {
  @Input() task?: Task;
  @Input() is_hidden!: boolean;
  @Output() updateTaskEvent = new EventEmitter();

  faCheck = faCheck;
  is_checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  date(day: string) {
    let date = new Date(day)
    console.log('date')
    return date
  }

  hideTask() {
    this.is_hidden = true;
  }

  updateTask(title: string, day: string) {
    this.is_checked = !this.is_checked;
    let data = {'title': title, 'task': this.task, 'day': day}
    this.updateTaskEvent.emit(data)
  }

  @HostListener('document:keypress', ['$event'])
  startSearch(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      const title = (<HTMLInputElement>document.getElementById('keypress')).value;
      const day = (<HTMLInputElement>document.getElementById('day-keypress')).value;
      this.updateTask(title, day);
    }
  }
}
