import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList = [
    {
      description: "Terminer cours bootstrap4",
      dateAjout: "09 / 11 / 2019"

    },
    {
      description: "Faire un nouveau projet angular",
      dateAjout: "09 / 11 / 2019"
    },
    {
      description: "Integration Template",
      dateAjout: "09 / 11 / 2019"
    }
     
  ]
  doneList = [
    {
      description: "Terminer cours Html",
      dateAjout: "09 / 11 / 2019",
      dateFin: "09 / 11 / 2019"

    },
    {
      description: "Terminer cours css",
      dateAjout: "09 / 11 / 2019",
      dateFin: "09 / 11 / 2019"
    },
    {
      description: "Terminer cours js",
      dateAjout: "09 / 11 / 2019",
      dateFin: "09 / 11 / 2019"
    }
  ]
  displayService: any;

  constructor() { }
 
  ngOnInit() {
  }
  deleteTodo(i: number) {
    this.todoList.splice(i, 1)
  }
  deleteDone(j: number) {
    this.doneList.splice(j, 1)


  } 

  insertDone(i, todo) {
    this.todoList.splice(i, 1)
    todo.dateFin ="12/11/2019"
    this.doneList.push(todo)

  }
  
  
}
