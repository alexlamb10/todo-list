import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tl-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.css' ]
})
export class TodoListComponent {
  @Output() markAsComplete:EventEmitter<any> = new EventEmitter; 
  @Output() deleteTask:EventEmitter<any> = new EventEmitter
  @Input() todoList: any[] = []
}
