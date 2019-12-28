import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  oldTodoDescription : String;
  idTodo : String ;

  editForm: FormGroup
  constructor(
    editBuilder: FormBuilder, 
    private router: Router, 
    private todoservice: TodoService,
    private route : ActivatedRoute) {
    this.editForm = editBuilder.group({
      description: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z]+')

      ])
    })

  }
  get description() { return this.editForm.get('description') }
 
  ngOnInit() { 
    this.idTodo = this.route.snapshot.paramMap.get('idTodo');
    
    this.todoservice.getById(this.idTodo).subscribe(
      (res)=>{
        this.oldTodoDescription = res.description;
      }
    )
  }


  edit() {

    let data = this.editForm.value
    let todo = new Todo(this.idTodo, data.description, '', '', '')

    this.todoservice.updateTodo(todo).subscribe((result) => {
      this.router.navigate(['/user/todo-list'])
    }, (erreur) => {
      console.log(erreur);
    })
  }


 





}






