import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(registerBuilder:FormBuilder) { 
    this.registerForm= registerBuilder.group({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      password: new FormControl(),
      repassword: new FormControl()
    })
    
  }

  ngOnInit() {
  }
  register() {
    console.log(this.registerForm.value)
  }

}