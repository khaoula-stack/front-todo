import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: new FormControl('', [
        Validators.required, 
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    })


  }
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }


  ngOnInit() {
  }
  login() {
    let data = this.loginForm.value
    let user = new User('', '', '', '', data.email, data.password)
    console.log(user)
  }

}
