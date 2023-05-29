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

  // public item$: Observable<any> = this._route.params.pipe(
  //   map((params: Params)=> {
  //     return +params['id'];
  //   }),
  //   switchMap((id:number) => {
  //     return this._todos.getTodoById(id);
  //   })
  // )

  constructor(private _route: ActivatedRoute, private _todos: TodoApiService) { }

  ngOnInit(): void {
    // this._route.params.pipe(
    //   map((params: Params)=> {
    //     console.log(params)
    //     return +params['id'];
    //   }),
    //   switchMap((id:number) => {
    //     return this._todos.getTodoById(id);
    //   })
    // )
    let id = this._route.snapshot.params['id'];
    this._todos.getTodoById(id).pipe(
      ).subscribe(list => this.item$.next(list));
  }

}
