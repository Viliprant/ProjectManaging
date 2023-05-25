import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './list-project/list-project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { CoreModule } from '../_core/core.module';

@NgModule({
  declarations: [
    ListProjectComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ProjectRoutingModule,
  ],
})
export class ProjectModule { }
