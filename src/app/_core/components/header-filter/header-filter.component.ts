import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BinaryIconValue } from '../../models/binary-icon-value';
import { DropdownOption } from '../../models/dropdown-option';

@Component({
  selector: 'app-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss']
})
export class HeaderFilterComponent {
  @Input() filterOptions: DropdownOption[] = [];
  @Input() orderOptions: DropdownOption[] = [];
  @Input() orderByDirection: BinaryIconValue[] = [];

  @Input() searchValue: string = '';
  @Input() filterOptionsValue?: DropdownOption = undefined;
  @Input() orderOptionsValue?: DropdownOption = undefined;
  @Input() orderByDirectionValue?: BinaryIconValue = undefined;

  @Input() searchPlaceholder: string = 'Rechercher...';

  @Output() searchValueChange: EventEmitter<string> = new EventEmitter();
  @Output() filterOptionsValueChange: EventEmitter<DropdownOption> = new EventEmitter();
  @Output() orderOptionsValueChange: EventEmitter<DropdownOption> = new EventEmitter();
  @Output() orderByDirectionValueChange: EventEmitter<BinaryIconValue> = new EventEmitter();

  ngOnInit(){
    this.orderByDirectionValue = this.orderByDirection[0];
  }

  onSearchChange(value: string){
    this.searchValueChange.emit(value);
  }

  onFilterChange(value: DropdownOption){
    this.filterOptionsValueChange.emit(value);
  }

  onOrderChange(value: DropdownOption){
    this.orderOptionsValueChange.emit(value);
  }

  onDirectionChange(value: BinaryIconValue){
    this.orderByDirectionValueChange.emit(value);
  }
}
