import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos?:Todo[];

  inputTodo:string="";

  constructor() { }

  ngOnInit(): void {

    //Array of list
    this.todos=[
      {
        content:'First Todo',
        completed:false
      },
      {
        content:'Second Todo',
        completed:true
      },

    ]
  }
  // Completed functionality 
  toggleDone(id: number){
    this.todos?.map((v,i)=>{
        if(i==id) v.completed=!v.completed; v;

        return
    })
  }
  //Delete functionality
  deleteTodo(id: number){
    this.todos=this.todos?.filter((v,i)=>i!==id);
  }

    //Add functionality
  addTodo(){
    this.todos?.push({
      content:this.inputTodo,
      completed:false
    });

    this.inputTodo="";
  }

}
