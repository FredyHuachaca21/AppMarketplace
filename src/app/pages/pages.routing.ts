import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { BrandComponent } from './brand/brand.component';
import { AccessComponent } from './access/access.component';
import { DirecctionComponent } from './direcction/direcction.component';
import { DriverComponent } from './driver/driver.component';
import { EmployeeComponent } from './employee/employee.component';
import { EntryComponent } from './entry/entry.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { LocalComponent } from './local/local.component';
import { MessagesComponent } from './messages/messages.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { PersonComponent } from './person/person.component';
import { RoleComponent } from './role/role.component';
import { TypeVehiculesComponent } from './type-vehicules/type-vehicules.component';
import { UnitMeasureComponent } from './unit-measure/unit-measure.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { VoucherComponent } from './voucher/voucher.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,

    children: [
      { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'}},
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'}},
      { path: 'grafica1', component: Grafica1Component, data: {titulo: 'Grafica1'}},
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},

      { path: 'pages', component: PagesComponent, data: {titulo: 'Dashboard'}},

      { path: 'product', component: ProductComponent, data: {titulo: 'Product'}},
      { path: 'employee', component: EmployeeComponent, data: {titulo: 'Employee'}},
      { path: 'person', component: PersonComponent, data: {titulo: 'Person'}},
      { path: 'category', component: CategoryComponent, data: {titulo: 'Category'}},
      { path: 'brand', component: BrandComponent, data: {titulo: 'Brand'}},
      { path: 'user', component: UnitMeasureComponent, data: {titulo: 'User'}},
      { path: 'vehicules', component: VehiculesComponent, data: {titulo: 'Vehicules'}},
      { path: 'order', component: OrdersComponent, data: {titulo: 'Order'}},
      { path: 'entry', component: EntryComponent, data: {titulo: 'Entry'}},
      { path: 'access', component: AccessComponent, data: {titulo: 'Access'}},
      { path: 'direcction', component: DirecctionComponent, data: {titulo: 'Direcction'}},
      { path: 'driver', component: DriverComponent, data: {titulo: 'Driver'}},
      { path: 'local', component: LocalComponent, data: {titulo: 'Local'}},
      { path: 'messages', component: MessagesComponent, data: {titulo: 'Messages'}},
      { path: 'role', component: RoleComponent, data: {titulo: 'Role'}},
      { path: 'voucher', component: VoucherComponent, data: {titulo: 'Voucher'}},

      { path: 'entry-details', component: EntryDetailsComponent, data: {titulo: 'Entry Details'}},
      { path: 'order-detail', component: OrderDetailsComponent, data: {titulo: 'Order Detail'}},
      { path: 'unit-measure', component: UnitMeasureComponent, data: {titulo: 'Unit Measure'}},
      { path: 'type-vehicule', component: TypeVehiculesComponent, data: {titulo: 'Type Vehicule'}},

      { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes de Tema'}},
      { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'}},

      //   {    path: '', redirectTo: '/dashboard', pathMatch: 'full'  },
    ],
  },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
