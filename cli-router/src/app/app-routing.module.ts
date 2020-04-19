import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { NewsComponent } from './views/news/news.component';
import { NewsListComponent } from './views/news/news-list/news-list.component';
import { NewsInfoComponent } from './views/news/news-info/news-info.component';

import { GoodsComponent } from './views/goods/goods.component';
import { GoodsListComponent } from './views/goods/goods-list/goods-list.component';
import { GoodsInfoComponent } from './views/goods/goods-info/goods-info.component';

import { DishComponent } from './views/dish/dish.component';
import { DishlistComponent } from './views/dish/dishlist/dishlist.component';
import { DishinfoComponent } from './views/dish/dishinfo/dishinfo.component';

import { UserComponent } from "./modules/user/user.component";
import { AddressComponent } from "./modules/user/components/address/address.component";
import { SystemComponent } from "./modules/system/system.component";


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'news', component: NewsComponent,
    children: [
      {
        path: 'newslist', component: NewsListComponent
      },
      {
        path: 'newsinfo', component: NewsInfoComponent
      },
      {
        path: '**', redirectTo: 'newslist'
      }
    ]
  },

  {
    path: 'goods', component: GoodsComponent,
    children: [
      {
        path: 'goodslist', component: GoodsListComponent
      },
      {
        path: 'goodsinfo', component: GoodsInfoComponent
      },
      {
        path: '**', redirectTo: 'goodslist'
      }
    ]
  },

  {
    path: 'dish', component: DishComponent,
    children: [
      {
        path: 'dishlist', component: DishlistComponent
      },
      {
        path: 'dishinfo/:id', component: DishinfoComponent
      },
      {
        path: '**', redirectTo: 'dishlist'
      },
    ]
  },

  {
    path: 'system', component: SystemComponent
  },

  {
    path: 'user', component: UserComponent,
    children: [
      {
        path: 'address', component: AddressComponent
      }
    ]
  },

  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
