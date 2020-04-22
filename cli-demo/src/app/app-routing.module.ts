import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 路由模块：根据不同的url地址、参数 #，动态的让根组件挂载其对应的页面、组件，这就是一个单页面应用(运行速度快：页面、组件切换不刷新)！！


import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';

import { HomeComponent } from './views/home/home.component';
import { DomComponent } from './views/dom/dom.component';

import { DataBindingComponent } from './views/data-binding/data-binding.component';
import { DataInteractionComponent } from './views/data-interaction/data-interaction.component';

import { TongXunComponent } from './views/tong-xun/tong-xun.component';
import { LifeCycleComponent } from './views/life-cycle/life-cycle.component';

import { NewsComponent } from './views/news/news.component';
import { NewsInfoComponent } from './views/news-info/news-info.component';

import { GoodsComponent } from "./views/goods/goods.component";
import { GoodsInfoComponent } from "./views/goods-info/goods-info.component";
import { ZdyModuleComponent } from './views/zdy-module/zdy-module.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    // 路由嵌套(父子路由)
    children: [
      { path: 'datadinding', component: DataBindingComponent },
      { path: 'form', component: FormComponent },
      { path: 'dom', component: DomComponent },
      { path: 'todolist', component: ToDoListComponent },
      { path: 'search', component: SearchComponent },
      { path: 'tongxun', component: TongXunComponent },
      { path: 'lifecycle', component: LifeCycleComponent },
      { path: 'rxjs', component: RxjsComponent },
      { path: 'getdata', component: DataInteractionComponent },
      { path: 'zdymodule', component: ZdyModuleComponent },
      {
        path: '**',
        // component: HomeComponent,    // 加载组件
        redirectTo: 'datadinding'       // 跳转路由
      }
    ]
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'newsinfo', component: NewsInfoComponent
  },
  {
    path: 'newsinfo/:id', component: NewsInfoComponent  //设置动态路由传参的参数名（注：当页面刷亲后会报错！）
  },
  {
    path: 'goods', component: GoodsComponent
  },
  {
    path: 'goodsinfo', component: GoodsInfoComponent
  },
  {
    path: 'goodsinfo/:id', component: GoodsInfoComponent //设置动态路由传参的参数名（注：当页面刷亲后会报错！）
  },

  // 默认路由： 当匹配不到路由时，加载对应的(如404)组件 或 跳转到某个路由
  {
    path: '**',
    // component: HomeComponent,    // 加载组件
    redirectTo: '/'                 // 跳转路由
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
