import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverallSearchComponent } from './overall-search/overall-search.component';

const mainRoutes: Routes = [
  { path: '', component: OverallSearchComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
