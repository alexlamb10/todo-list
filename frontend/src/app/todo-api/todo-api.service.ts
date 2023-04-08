import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  list: Observable<any[]> | any ;

  constructor(private _http: HttpClient) { }
  baseURL = 'http://localhost:3000'

  getTodos(): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseURL}/`)
  }
  getTodoById(id: string): Observable<any[]> {
    return this._http.get<any[]>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  createTodo(todo: any) {
    return this._http.post<any[]>(`${this.baseURL}/add`, {todo})
  }
}
