import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownOption } from '../../models/dropdown-option';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss']
})
export class DropdownInputComponent {
  @Input() label: string = 'Pas précisé';
  @Input() options: DropdownOption[] = [];
  @Input() value?: DropdownOption = undefined;
  @Output() valueChange: EventEmitter<DropdownOption> = new EventEmitter();

  public onChange(event: Event){
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const selectedOption: DropdownOption | undefined = this.options.find((o) => o.value === target.value);

    this.valueChange.emit(selectedOption);
  }
}
