import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
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
import { UserComponent } from './user/user.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { VoucherComponent } from './voucher/voucher.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent,
    ProductComponent,
    CategoryComponent,
    BrandComponent,
    AccessComponent,
    DirecctionComponent,
    DriverComponent,
    EmployeeComponent,
    EntryComponent,
    EntryDetailsComponent,
    LocalComponent,
    MessagesComponent,
    OrderDetailsComponent,
    OrdersComponent,
    PersonComponent,
    RoleComponent,
    TypeVehiculesComponent,
    UnitMeasureComponent,
    UserComponent,
    VehiculesComponent,
    VoucherComponent,
    AccountSettingsComponent,
  ],
  exports: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent,
    ProductComponent,
    CategoryComponent,
    BrandComponent,
    AccessComponent,
    DirecctionComponent,
    DriverComponent,
    EmployeeComponent,
    EntryComponent,
    EntryDetailsComponent,
    LocalComponent,
    MessagesComponent,
    OrderDetailsComponent,
    OrdersComponent,
    PersonComponent,
    RoleComponent,
    TypeVehiculesComponent,
    UnitMeasureComponent,
    UserComponent,
    VehiculesComponent,
    VoucherComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    // AppRoutingModule,
    RouterModule,
  ],
})
export class PagesModule {}
