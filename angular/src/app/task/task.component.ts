import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../Task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  btn?:string = 'add';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  last = this.taskService


  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(() => this.tasks = this.tasks
      .filter(t => t.id! !== task.id)
    );
  }

  setReminder (task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateReminder(task).subscribe()
  }

  createNewTask(task: Task) {
    this.taskService.createTask(task).subscribe((task) => (
      this.tasks.push(task)
    ))
  }

}
