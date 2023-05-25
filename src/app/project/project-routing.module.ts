import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectComponent } from './list-project/list-project.component';
import { AddProjectComponent } from './add-project/add-project.component';

const projectRoutes: Routes = [
  {
    path: 'add',
    component: AddProjectComponent,
  },
  {
    path: '',
    component: ListProjectComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
