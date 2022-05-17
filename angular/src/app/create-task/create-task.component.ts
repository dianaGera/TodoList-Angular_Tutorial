import { Component, OnInit, Input } from '@angular/core';
import { TASKS } from '../task_list';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.sass']
})
export class CreateTaskComponent implements OnInit {
  @Input() btn?: string;

  constructor() { }

  ngOnInit(): void {
  }

  btnCreate() {
    
  }

}
