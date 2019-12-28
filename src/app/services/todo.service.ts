import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private getalltodosUrl = "http://localhost:3000/todo/list/"
  private addTodoUrl = "http://localhost:3000/todo/add"
  private doneTodoUrl = "http://localhost:3000/todo/done"
  private deleteTodoUrl = "http://localhost:3000/todo/deletetodo"
  private updateTodoUrl = "http://localhost:3000/todo/update"
  private getTodoByIdUrl ="http://localhost:3000/todo/"
  
  constructor(private http: HttpClient) { }

  getAllTodos(idUser) {
    return this.http.get<any>(this.getalltodosUrl + idUser)
  }

  getById(idTodo){
    return this.http.get<any>(this.getTodoByIdUrl+idTodo);
  }

  addTodo(todo) {
    let resultFromdb = this.http.post<any>(this.addTodoUrl, todo);
    return resultFromdb;
  }

  updateTodo(todo) {
    let resultFromdb = this.http.put<any>(this.updateTodoUrl, todo);
    return resultFromdb;
  }

  deleteTodo(todo) {
    let resultFromdb = this.http.post<any>(this.deleteTodoUrl,todo);
    return resultFromdb;
  }

  doneTodo(todo) {
    let resultFromdb = this.http.put<any>(this.doneTodoUrl, todo);
    return resultFromdb;
  }

}