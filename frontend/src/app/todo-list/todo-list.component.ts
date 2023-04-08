import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TodoApiService } from '../todo-api/todo-api.service';
import { tap } from 'rxjs';

@Component({
  selector: 'tl-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList:any[] = []

  constructor() {}

  ngOnInit() {}

}
