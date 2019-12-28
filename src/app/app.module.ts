import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import { ModifierComponent } from './components/modifier/modifier.component';
import { UserService } from './services/user.service';
import {HttpClientModule}from '@angular/common/http';
import { TodoService } from './services/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    TodoListComponent,
    AjouterComponent,
    ModifierComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    TodoService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
