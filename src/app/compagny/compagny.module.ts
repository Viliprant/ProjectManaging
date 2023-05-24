import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompangnyRoutingModule } from './compagny-routing.module';
import { ListCompagnyComponent } from './list-compagny/list-compagny.component';

@NgModule({
  declarations: [
    ListCompagnyComponent
  ],
  imports: [
    CommonModule,
    CompangnyRoutingModule
  ]
})
export class CompagnyModule { }
