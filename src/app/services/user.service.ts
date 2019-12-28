import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({ 
  providedIn: 'root'
})
export class UserService { 

  private _registerUserUrl="http://localhost:3000/user/register";
  private _loginUserUrl="http://localhost:3000/user/login";

  constructor(private http:HttpClient) {}
  registerUser(user){
    let resultFromdb=this.http.post<any>(this._registerUserUrl,user);
    return resultFromdb;
  } 

  loginUser(user){
    let resultat=this.http.post<any>(this._loginUserUrl,user);
    return resultat; 
  }
  
}
