import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(formBuilder: FormBuilder, private router: Router, private userservice: UserService) {
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
    let user = new User(null, null, null, null, data.email, data.password)
    this.userservice.loginUser(user).subscribe((result) => {
      localStorage.setItem('token', result.token);
      this.router.navigate(['/user/todo-list']);
    }, (error) => {
      console.log(error);

    })
  }

}
