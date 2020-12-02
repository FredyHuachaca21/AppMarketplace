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

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,

    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'brand', component: BrandComponent },
      { path: 'access', component: AccessComponent },
      { path: 'direcction', component: DirecctionComponent },
      { path: 'driver', component: DriverComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'entry', component: EntryComponent },
      { path: 'entry-details', component: EntryDetailsComponent },
      { path: 'local', component: LocalComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'order-detail', component: OrderDetailsComponent },
      { path: 'order', component: OrdersComponent },
      { path: 'person', component: PersonComponent },
      { path: 'role', component: RoleComponent },
      { path: 'type-vehicule', component: TypeVehiculesComponent },
      { path: 'unit-measure', component: UnitMeasureComponent },
      { path: 'user', component: UnitMeasureComponent },
      { path: 'vehicules', component: VehiculesComponent },
      { path: 'voucher', component: VoucherComponent },
      { path: 'account-settings', component: AccountSettingsComponent },

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
