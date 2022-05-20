import { Component, OnInit, Input, HostListener } from '@angular/core';
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

  faCheck = faCheck;
  is_checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideTask() {
    this.is_hidden = true
  }

  updateContent() {
    this.is_checked = !this.is_checked
    console.log('it is works')
  }

  @HostListener('document:keypress', ['$event'])
  startSearch(event: KeyboardEvent) {
    if (event.code === "Enter") {
      //Code that you need to run
    }
  }
}
