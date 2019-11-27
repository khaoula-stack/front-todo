import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  editForm: FormGroup
  constructor(editBuilder: FormBuilder) {
    this.editForm = editBuilder.group({
      description: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z]+')

      ])
    })

  }
  get description() { return this.editForm.get('description') }

  edit() {
    let data = this.editForm.value
    let todo = new Todo('', data.description, '', '', '')
    console.log(todo)
  }
  ngOnInit() {

  }





}






