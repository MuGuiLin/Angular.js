import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 路由模块：根据不同的url地址、参数 #，动态的让根组件挂载其对应的页面、组件，这就是一个单页面应用(运行速度快：页面、组件切换不刷新)！！

import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'news', component: NewsComponent
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
