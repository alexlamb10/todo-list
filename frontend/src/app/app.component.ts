import { Component } from '@angular/core';
import { TodoApiService } from './todo-api/todo-api.service'
import { Observable, switchMap, tap } from 'rxjs';


@Component({
  selector: 'tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List';
  singleItem:string = ''
  todoList$:Observable<any> = new Observable
  

  constructor(private _todos: TodoApiService) {

  }

  ngOnInit() {
    
  }

   addItem(todo:string): void{
      this.todoList$ = this._todos.createTodo(todo).pipe(
        tap( list => console.log({list})),
        switchMap( () => this._todos.getTodos())
      )
   }
   
}
