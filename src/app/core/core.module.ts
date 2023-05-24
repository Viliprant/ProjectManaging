import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports:[
    MainNavComponent,
    AppRoutingModule
  ]
})
export class CoreModule { }
