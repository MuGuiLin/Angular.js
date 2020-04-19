import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 自定义模块中的公共服务模块
import { StorageService } from "./services/storage.service";

// 公共组件
import { AddressComponent } from './components/address/address.component';
import { WalletComponent } from './components/wallet/wallet.component';

// 根页面组件
import { UserComponent } from './user.component';

// 页面组件
import { OrderComponent } from './views/order/order.component';
import { CollectComponent } from './views/collect/collect.component';

@NgModule({

  // user模块中的页面、组件
  declarations: [
    UserComponent, 
    AddressComponent, 
    OrderComponent, 
    WalletComponent, CollectComponent
  ],

  // 向外暴露模块、页面、组件，这样在根组件等就可以引用了
  exports: [
    UserComponent,
    AddressComponent
  ],

  imports: [
    CommonModule
  ],

  // 引入模块
  providers: [
    StorageService
  ]
})

export class UserModule { }
