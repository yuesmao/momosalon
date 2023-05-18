import { Component } from '@angular/core';

export interface TableData {
  name: string;
  value: number;
}

export interface Group {
  groupname: string;
  group: boolean;
}

const ELEMENT_DATA: (TableData | Group)[] = [
  {groupname: "HAIRCUTS", group: true},
  {name: 'Hydrogen', value: 1.025079},
  {name: 'Helium', value: 4.0022626},
  {groupname: "COLORING", group: true},
  {name: 'Hydrogen', value: 1.006579},
  {name: 'Helium', value: 4.0024226},
  {groupname: "TREATMENT", group: true},
  {name: 'Hydrogen', value: 1.0087679},
  {name: 'Helium', value: 4.0026566},
  {groupname: "WAXING", group: true},
  {name: 'Hydrogen', value: 1.025079},
  {name: 'Helium', value: 4.0022626},
];

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent {

  displayedColumns: string[] = ['name', 'value'];
  dataSource = ELEMENT_DATA;

  isGroup(index: any, item: Group): boolean{
    return item.group;
  }

}
