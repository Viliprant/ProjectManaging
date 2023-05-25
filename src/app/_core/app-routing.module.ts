import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  {
    path: 'project',
    loadChildren: () =>
      import('../project/project.module').then((m) => m.ProjectModule),
  },
  {
    path: 'task',
    loadChildren: () =>
      import('../task/task.module').then((m) => m.TaskModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('../search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'compagny',
    loadChildren: () =>
      import('../compagny/compagny.module').then((m) => m.CompagnyModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('../settings/settings.module').then((m) => m.SettingsModule),
  },
  { path: '**', redirectTo: 'project', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
