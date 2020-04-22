import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AddressComponent } from './views/address/address.component';
import { OrderComponent } from './views/order/order.component';
import { SetupComponent } from './views/setup/setup.component';


@NgModule({
  declarations: [UserComponent, AddressComponent, OrderComponent, SetupComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
