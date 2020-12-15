import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
 taskId:Number;
  constructor() { }

  ngOnInit(): void {
    // this.taskId = router.params.taskId
  }

}
