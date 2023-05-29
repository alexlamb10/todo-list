import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'tl-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  // public item$: Observable<Todo> = this._route.params.pipe(
  //   map((params: Params)=> {
  //     return +params['id'];
  //   }),
  //   switchMap((id:number) => {
  //     return this._service.getItemById(id);
  //   })
  // )

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
