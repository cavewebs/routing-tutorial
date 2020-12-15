import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  rate:any = Math.random()
  fakeTime:any= new Date();
  selectedTask:any;
  fakeTaskTime = this.fakeTime.setDate(this.rate);

  tasks:any = [
    {
      "active": true,
      "title": "Starting the development server",
      "description": "You can now view my-app in the browser",
      "time": this.fakeTaskTime,
      "id": 1
    },
    {
      "active": true,
      "title": "Adding Routes",
      "description": "Add routing to application",
      "time": this.fakeTaskTime,
      "id": 2
    },
    {
      "active": true,
      "title": "Creating Services",
      "description": "You can now create services",
      "time": this.fakeTaskTime,
      "id": 3
    },
    {
      "active": true,
      "title": "Consume APIs",
      "description": "You can now Consume APIs",
      "time": this.fakeTaskTime,
      "id": 4
    }
  ];
    


  constructor() { }

  ngOnInit(): void {
  }

  getTaskDetails(task:any){
    console.log('selected Task', task);
    this.selectedTask = task;

    
  }

}
