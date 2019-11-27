import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  addForm: FormGroup
  constructor(addBuilder:FormBuilder) {
    this.addForm=addBuilder.group({
      description:new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z]+')

      ])
      

    })

  }
  get description() { return this.addForm.get('description') }
  add() { 
    let data = this.addForm.value
    let todo = new Todo('', data.description,'', '', '')
    console.log(todo)
  }
  ngOnInit() {

  
}
}
