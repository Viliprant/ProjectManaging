import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BinaryIconValue } from '../../models/binary-icon-value';

@Component({
  selector: 'app-binary-icon-input',
  templateUrl: './binary-icon-input.component.html',
  styleUrls: ['./binary-icon-input.component.scss'],
})
export class BinaryIconInputComponent {
  @Input() trueValue?: BinaryIconValue = undefined;
  @Input() falseValue?: BinaryIconValue = undefined;
  @Input() binaryValue?: BinaryIconValue = undefined;
  @Output() binaryValueChange: EventEmitter<BinaryIconValue> = new EventEmitter();

  public onClick(){
    if(this.binaryValue === this.trueValue){
      this.binaryValueChange.emit(this.falseValue);
    }
    else{
      this.binaryValueChange.emit(this.trueValue);
    }
  }

  ngOnInit(){
    this.binaryValue = this.trueValue;
  }
}
