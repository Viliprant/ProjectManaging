import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './list-project/list-project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  declarations: [
    ListProjectComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
})
export class ProjectModule { }
