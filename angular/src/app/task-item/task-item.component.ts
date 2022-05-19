import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit {
  @Input() task?: Task;
  @Input() is_hidden!: boolean;

  faCode = faCode;

  constructor() { }

  ngOnInit(): void {
  }

  hideTask() {
    console.log(this.is_hidden)
    this.is_hidden = true
    console.log(this.is_hidden)
  }
}
