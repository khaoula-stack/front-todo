import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import { ModifierComponent } from './components/modifier/modifier.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'login',
    component:LoginComponent

  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'ajouter',
    component:AjouterComponent
  },
  {
    path:'modifier',
    component:ModifierComponent
  },
  {
    path:'user/todo-list',
    component:TodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
