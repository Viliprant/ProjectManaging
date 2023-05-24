import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompagnyComponent } from './list-compagny/list-compagny.component';

const mainRoutes: Routes = [
  { path: '', component: ListCompagnyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class CompangnyRoutingModule {}
