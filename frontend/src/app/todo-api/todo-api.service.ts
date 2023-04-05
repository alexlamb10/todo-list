import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private _http: HttpClient) { }

  getTodos(): Observable<any[]> {
    return this._http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
  }

  getTodoById(id: string): Observable<any[]> {
    return this._http.get<any[]>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  createTodo(todo: any) {
    return this._http.post('http://localhost:3000/todos', todo);
  }
}
