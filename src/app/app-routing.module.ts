import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { IndexComponent } from './index/index.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import {TaskComponent} from './task/task.component'

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'tasks',
    component: TaskComponent
  },
  {
    path: 'task-detail/:taskId',
    component: TaskDetailComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
