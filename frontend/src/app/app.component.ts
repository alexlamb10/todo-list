import {Component} from '@angular/core';
import {TodoApiService} from './todo-api/todo-api.service'
import {BehaviorSubject, Observable} from 'rxjs';


@Component({
  selector: 'tl-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'My To Do List';
  singleItem: string = ''


  displayList$: Observable<any> = this._todos.getTodos()


  constructor(private _todos: TodoApiService) { }

  ngOnInit() { }

  addItem(todo: string): void {
    this.displayList$ = this._todos.createTodo(todo)
  }

  markComplete(id: string): void {
    this.displayList$ = this._todos.markComplete(id)
  }

}
