import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [{
    title: 'Mantenimiento',
    icon: 'mdi mdi-gauge',
    submenu:[
      {subTitulo: "Producto", url: 'product'},
      {subTitulo: "Categoria", url: 'category'},
      {subTitulo: "Marca", url: 'brand'},
      {subTitulo: "Unidad de Medida", url: 'unit-measure'},
      {subTitulo: "Empleado", url: 'employee'},
    ]
  }];

  constructor() { }
}
