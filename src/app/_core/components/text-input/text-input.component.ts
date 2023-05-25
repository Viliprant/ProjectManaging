import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  public onChange(event: Event){
    const target: HTMLInputElement = event.target as HTMLInputElement;

    this.valueChange.emit(target.value);
  }
}
