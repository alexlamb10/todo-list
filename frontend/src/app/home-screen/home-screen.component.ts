import {Component} from '@angular/core';
import { TodoApiService } from '../todo-api/todo-api.service';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'tl-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
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
  markAsComplete(id: any): void {
    this._todos.markComplete(id).subscribe((s) => {
      this.displayList$.next(s)
    })
  }
  deleteTask(id: any): void {
    this._todos.deleteTask(id).subscribe((s) => {
      this.displayList$.next(s)
    })
  }

}
