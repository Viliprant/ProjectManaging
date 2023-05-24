import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSettingsComponent } from './list-settings/list-settings.component';

const mainRoutes: Routes = [
  { path: '', component: ListSettingsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
