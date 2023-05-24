import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectComponent } from './list-project/list-project.component';

const projectRoutes: Routes = [
  {
    path: 'add',
    component: ListProjectComponent,
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
