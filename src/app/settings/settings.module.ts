import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { ListSettingsComponent } from './list-settings/list-settings.component';

@NgModule({
  declarations: [
    ListSettingsComponent
  ],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
