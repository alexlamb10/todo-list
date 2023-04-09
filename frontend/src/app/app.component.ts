import {Component} from '@angular/core';
import {TodoApiService} from './todo-api/todo-api.service'
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'tl-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'My To Do List';
  singleItem: string = ''


  displayList$: BehaviorSubject<any> = new BehaviorSubject<any>([])


  constructor(private _todos: TodoApiService) { }

  ngOnInit() {
    this._todos.getTodos().pipe(
    ).subscribe(list => this.displayList$.next(list))
  }

  addItem(todo: string): void {
    this._todos.createTodo(todo).subscribe((s) => {
      this.displayList$.next(s)
    })
  }

}
