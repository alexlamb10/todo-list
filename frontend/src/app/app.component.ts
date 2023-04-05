import { Component } from '@angular/core';
import { TodoApiService } from './todo-api/todo-api.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List';
  singleItem:string = ''
  // todoList:Array<string> = [];
  todoList$: Observable<any[]> = this._todos.getTodos(); 

  constructor(private _todos: TodoApiService) {}

  ngOnInit() {
    this._todos.getTodoById('1').subscribe((todo) => {
      console.log(todo);
    })
  }

  todoItem(val:string){
    this.singleItem = val;

  }
//    AddItem(): void{
//     if(this.singleItem === ''){
//       return
//     }else{
//       this.todoList.push(this.singleItem);
//       this.singleItem = ''
//       console.log(this.todoList)
//     }
  
// }
}
