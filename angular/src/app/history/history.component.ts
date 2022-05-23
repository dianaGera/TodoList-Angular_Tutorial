import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task'


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {
  @Input() tasks?: Task[];
  @Input() text!: string;



  constructor() { }

  ngOnInit(): void {
  }

}
