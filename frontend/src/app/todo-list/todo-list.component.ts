import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TodoApiService } from '../todo-api/todo-api.service';

@Component({
  selector: 'tl-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private _todos: TodoApiService) {}
  todoList$: Observable<any[]> = this._todos.getTodos(); 
  ngOnInit() {
    // this._todos.getTodoById('1').subscribe((todo) => {
    //   console.log(todo);
    // })
    this._todos.getTodos().subscribe((list) =>{
      console.log(list)
    })
  }

}
