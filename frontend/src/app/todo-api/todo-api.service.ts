import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, switchMap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  list: Observable<any[]> | any;

  constructor(private _http: HttpClient) { }
  baseURL = 'http://localhost:3000'

  getTodos(): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseURL}/`)
  }
  getTodoById(id: any): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseURL}/markComplete/:${id}`)
  }

  createTodo(todo: any) {
    return this._http.post<any[]>(`${this.baseURL}/add`, {todo}).pipe(
      switchMap(() => this.getTodos()),
    )
  }
  markComplete(id: number) {
    return this._http.put<any[]>(`${this.baseURL}/markComplete/${id}`, {}).pipe(
      switchMap(() => this.getTodos()),
    )
  }
  deleteTask(id: number) {
    return this._http.delete<any[]>(`${this.baseURL}/deleteTask/${id}`, {}).pipe(
      switchMap(() => this.getTodos()),
    )
  }
}
