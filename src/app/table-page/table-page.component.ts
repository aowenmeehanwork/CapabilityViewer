import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }



rowData = [
  { business_development: 'Toyota', model: 'Celica', price: 35000 },
  { business_development: 'Ford', model: 'Mondeo', price: 32000 },
  { business_development: 'Porsche', model: 'Boxter', price: 72000 }
];


columnDefs = [
{
    headerName: 'Sales and Marketing',
    children: [
        {headerName: 'Business development', field: 'business_development', width: 150, filter: 'agTextColumnFilter'},
        {headerName: 'Account Management', field: 'age', width: 90, filter: 'agNumberColumnFilter'},
        {headerName: 'Sales', field: 'country', width: 120}
    ]
},
{
    headerName: 'Technical',
    children: [
        {headerName: 'Software engineer', field: 'sport', width: 90, columnGroupShow: 'open'},
        {headerName: 'Data Engineering', columnGroupShow: 'open', field: 'total', width: 100, filter: 'agNumberColumnFilter'},
    ]
}
];

gridOptions = {
defaultColDef: {
    sortable: true,
    resizable: true,
    filter: true
},
debug: true,
columnDefs: this.columnDefs,
rowData: this.rowData
};

}
