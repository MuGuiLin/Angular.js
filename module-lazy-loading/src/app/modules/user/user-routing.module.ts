import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { AddressComponent } from './views/address/address.component';
import { OrderComponent } from './views/order/order.component';
import { SetupComponent } from './views/setup/setup.component';
const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      {
        path: 'useraddress', component: AddressComponent
      },
      {
        path: 'userorder', component: OrderComponent
      }
    ]
  },
  {
    path: 'usersetup', component: SetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
