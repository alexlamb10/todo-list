import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tl-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Output() markAsComplete:EventEmitter<any> = new EventEmitter

  @Input() item: any
  constructor() { }
  MarkAsComplete(id: any): void {
    this.markAsComplete.emit(id)
  }

}
