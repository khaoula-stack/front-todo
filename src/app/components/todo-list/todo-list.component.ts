import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
   todoList = [];
   doneList = [];
 
  constructor(private todoservice:TodoService ,private  router:Router) { }
 
  ngOnInit() { 
    const helper = new JwtHelperService();
    let token=localStorage.getItem('token');
    const decodedToken = helper.decodeToken(token);
    let idUser=decodedToken.idUser;
    this.todoservice.getAllTodos(idUser).subscribe(
      (result)=>{
        console.log(result) 
        this.todoList=result.todoList
        this.doneList=result.doneList
      },
      (e)=>{
        console.log(e)
      })
      
  }


  delete(todo) { 
    this.todoservice.deleteTodo(todo).subscribe((result)=>{
    console.log(result.message); 
    this.router.navigate(['/'])
  },(erreur)=>{
    console.log(erreur);  
  }) 
 }
 
done(todo) { 
  this.todoservice.doneTodo(todo).subscribe((result)=>{
  console.log(result.message); 
  this.router.navigate(['/'])
},(erreur)=>{
  console.log(erreur);  
}) 
}

  
  
  
}
