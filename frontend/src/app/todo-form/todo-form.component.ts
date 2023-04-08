import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoApiService } from '../todo-api/todo-api.service';

@Component({
  selector: 'tl-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() addItem:EventEmitter<string> = new EventEmitter

  singleItem = ''
  constructor(private _todos: TodoApiService) { }
  AddItem(): void{
    if(this.singleItem === ''){
      return
    }else{
      // console.log("hit", this.singleItem)
      // const todo = this.singleItem
      // this._todos.createTodo(todo)
      this.addItem.emit(this.singleItem)
      this.singleItem = ''
      
    }
  }

  todoItem(val:string){
    this.singleItem = val;

  }
  ngOnInit(): void {
  }

}
