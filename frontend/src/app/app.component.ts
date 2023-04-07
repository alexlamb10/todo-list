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
  

  constructor(private _todos: TodoApiService) {}

  ngOnInit() {
    
  }

  
   
}
