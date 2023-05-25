import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './_core/core.module';
import { AppRoutingModule } from './_core/app-routing.module';
import { MainNavComponent } from './_core/components/main-nav/main-nav.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
