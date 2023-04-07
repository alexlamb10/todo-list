import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor() { }
  AddItem(): void{
    // if(this.singleItem === ''){
    //   return
    // }else{
    //   this.todoList.push(this.singleItem);
    //   this.singleItem = ''
    //   console.log(this.todoList)
    // }
  }

  todoItem(val:string){
    // this.singleItem = val;

  }
  ngOnInit(): void {
  }

}
