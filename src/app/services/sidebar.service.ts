import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu:[
        {subTitulo: "Dashboard", url: 'dashboard'},
        {subTitulo: "Progress", url: 'progress'},
        {subTitulo: "Promesas", url: 'promesas'},
        {subTitulo: "RxJs", url: 'rxjs'},
      ]
    },
    {
    title: 'Mantenimiento',
    icon: 'mdi mdi-wrench',
    submenu:[
      {subTitulo: "Product", url: 'product'},
      {subTitulo: "Employee", url: 'employee'},
      {subTitulo: "Person", url: 'person'},
      {subTitulo: "Category", url: 'category'},
      {subTitulo: "Brand", url: 'brand'},
      {subTitulo: "User", url: 'user'},
      {subTitulo: "Vehicules", url: 'vehicules'},
      {subTitulo: "Order", url: 'order'},
      {subTitulo: "Entry", url: 'entry'},
      {subTitulo: "Access", url: 'access'},
      {subTitulo: "Direcction", url: 'direcction'},
      {subTitulo: "Driver", url: 'driver'},
      {subTitulo: "Local", url: 'local'},
      {subTitulo: "Messages", url: 'messages'},
      {subTitulo: "Role", url: 'role'},
      {subTitulo: "Voucher", url: 'voucher'},

      {subTitulo: "Entry-Details", url: 'entry-details'},
      {subTitulo: "Order-Detail", url: 'order-detail'},
      {subTitulo: "Unit-Measure", url: 'unit-measure'},
      {subTitulo: "Type-Vehicule", url: 'type-vehicule'},

    ]
  },
  {
    title: 'Almacén',
    icon: 'mdi mdi-widgets',
    submenu:[
      {subTitulo: "Product", url: 'product'},
      {subTitulo: "Employee", url: 'employee'},
      {subTitulo: "Person", url: 'person'},
      {subTitulo: "Category", url: 'category'},
    ]
  },
  {
    title: 'Compras',
    icon: 'mdi mdi-tag',
    submenu:[
      {subTitulo: "Product", url: 'product'},
      {subTitulo: "Employee", url: 'employee'},
      {subTitulo: "Person", url: 'person'},
      {subTitulo: "Category", url: 'category'},
    ]
  },
  {
    title: 'Consulta Compras',
    icon: 'mdi mdi-shopping',
    submenu:[
      {subTitulo: "Product", url: 'product'},
      {subTitulo: "Employee", url: 'employee'},
      {subTitulo: "Person", url: 'person'},
      {subTitulo: "Category", url: 'category'},
    ]
  },
  {
    title: 'Consulta Ventas',
    icon: 'mdi mdi-sale',
    submenu:[
      {subTitulo: "Product", url: 'product'},
      {subTitulo: "Employee", url: 'employee'},
      {subTitulo: "Person", url: 'person'},
      {subTitulo: "Category", url: 'category'},
    ]
  },
  {
    title: 'Inventario',
    icon: 'mdi mdi-barcode-scan',
    submenu:[
      {subTitulo: "Product", url: 'product'},
      {subTitulo: "Employee", url: 'employee'},
      {subTitulo: "Person", url: 'person'},
      {subTitulo: "Category", url: 'category'},
    ]
  },
  {
    title: 'Seguridad',
    icon: 'mdi mdi-folder-lock-open',
    submenu:[
      {subTitulo: "Product", url: 'product'},
    ]
  },
  {
    title: 'Guia',
    icon: 'mdi mdi-help-circle',
    submenu:[
      {subTitulo: "Product", url: 'product'},
    ]
  },
  {
    title: 'Acerca de ...',
    icon: 'mdi mdi-lightbulb-on',
    submenu:[
      {subTitulo: "Product", url: 'product'},
    ]
  },
  {
    title: 'Cerrar Sesión',
    icon: 'mdi mdi-close-circle',
    submenu:[
      {subTitulo: "Cerrar", url: 'cerrar'},
      
    ]
  },
];

  constructor() { }
}
