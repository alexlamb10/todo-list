import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tl-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: any
  constructor() { }
  ngOnInit(): void {
  }

}
