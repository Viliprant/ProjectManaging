import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DropdownInputComponent } from './components/dropdown-input/dropdown-input.component';
import { BinaryIconInputComponent } from './components/binary-icon-input/binary-icon-input.component';

@NgModule({
  declarations: [TextInputComponent, DropdownInputComponent, BinaryIconInputComponent],
  imports: [CommonModule, MatIconModule],
  exports: [TextInputComponent, DropdownInputComponent, BinaryIconInputComponent],
})
export class CoreModule {}
