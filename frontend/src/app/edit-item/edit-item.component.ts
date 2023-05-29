import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { TodoApiService } from '../todo-api/todo-api.service';

@Component({
  selector: 'tl-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item$: BehaviorSubject<any> = new BehaviorSubject<any>([])

  constructor(private _route: ActivatedRoute, private _todos: TodoApiService) { }
  
  singleItem = '';
  id = this._route.snapshot.params['id'];
  ngOnInit(): void {
    let id = this._route.snapshot.params['id'];
    this._todos.getTodoById(id).pipe(
      ).subscribe(list => this.item$.next(list));
  }

  updateItem(): void{
    this._todos.updateItem(+this.id, this.singleItem).subscribe((s) => {
      this.item$.next(s)
    })
      // this._todos.updateItem(+this.id, this.singleItem); 
  }

  todoItem(val:string){
    this.singleItem = val;
  }

}
