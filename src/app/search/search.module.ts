import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { OverallSearchComponent } from './overall-search/overall-search.component';

@NgModule({
  declarations: [
    OverallSearchComponent
  ],
  imports: [CommonModule, SearchRoutingModule],
})
export class SearchModule {}
