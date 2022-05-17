import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  btn?:string = 'add'

  constructor() { }

  ngOnInit(): void {
  }

  btnCreate() {
    console.log('Create')
  }

  addTask() {
    console.log('Added')
  }
}
