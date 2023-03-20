import { Component } from '@angular/core';

@Component({
  selector: 'tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List';
  singleItem:string = ''
  todoList:Array<string> = [];

  todoItem(val:string){
    this.singleItem = val;

  }
   AddItem(): void{
    if(this.singleItem === ''){
      return
    }else{
      this.todoList.push(this.singleItem);
      this.singleItem = ''
      console.log(this.todoList)
    }
  
}
}
