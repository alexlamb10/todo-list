import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tl-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.css' ]
})
export class TodoListComponent {
  @Input() todoList: any[] = []
  @Output() markComplete: EventEmitter<string> = new EventEmitter<string>()

}
