import { Component } from '@angular/core';
import { BinaryIconValue } from 'src/app/_core/models/binary-icon-value';
import { DropdownOption } from 'src/app/_core/models/dropdown-option';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent {
  public filterOptions: DropdownOption[] = [
    {
      label: '',
      value: '',
      default: true
    },
    {
      label: 'En attente',
      value: 'En attente'
    },
    {
      label: 'En développement',
      value: 'En développement'
    },
    {
      label: 'Terminé',
      value: 'Terminé'
    },

  ];
  public orderOptions: DropdownOption[] = [
    {
      label: 'Nom de projet',
      value: 'Nom de projet',
      default: true,
    },
    {
      label: 'Nom de société',
      value: 'Nom de société'
    },
    {
      label: 'Date de modification',
      value: 'Date de modification'
    },
    {
      label: 'Date de lancement de projet',
      value: 'Date de lancement de projet'
    },
    {
      label: 'Date de la dernière réunion',
      value: 'Date de la dernière réunion'
    },
    {
      label: 'Date de la prochaine réunion',
      value: 'Date de la prochaine réunion'
    },
    {
      label: 'Date de la prochaine échéance',
      value: 'Date de la prochaine échéance'
    },
  ];;
  public orderByDirection: BinaryIconValue[] = [
    {
      iconName: 'arrow_upward',
      value: 'Croissant',
      default: true,
    },
    {
      iconName: 'arrow_downward',
      value: 'Décroissant'
    }
  ]

  public searchValue: string = '';
  public filterOptionsValue?: DropdownOption = undefined;
  public orderOptionsValue?: DropdownOption = undefined;
  public orderByDirectionValue?: BinaryIconValue = undefined;
}
