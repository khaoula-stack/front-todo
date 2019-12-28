import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {


  addForm: FormGroup 
  constructor(addBuilder: FormBuilder,private router:Router,private todoService:TodoService) {
    this.addForm = addBuilder.group({
      description: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z]+')

      ])
    })

  }
  get description() { return this.addForm.get('description') }
  ngOnInit() {

  }

  add() { 

    const helper = new JwtHelperService();
    let token=localStorage.getItem('token');
    const decodedToken = helper.decodeToken(token);
    let idUser=decodedToken.idUser;
    let data = this.addForm.value
    let todo = new Todo('', data.description, '', '', '',idUser)
   this.todoService.addTodo(todo).subscribe((result)=>{
     console.log(result.message); 
     this.router.navigate(['/'])
   },(erreur)=>{
     console.log(erreur);  
   }) 
  }
 


}