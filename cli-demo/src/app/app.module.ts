// Angular浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';

// Angular核心模块
import { NgModule } from '@angular/core';

import { LocationStrategy, HashLocationStrategy } from "@angular/common";

// Angular数据请求模块
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

//  Angular表单双向数据绑定模块
import { FormsModule } from '@angular/forms';

import { api } from "./app-api";

// 引用公共服务模块 ng g s services/xxxx
import { StorageService } from "./services/storage.service";

// 疑问, 感觉，服务模块在这里没引用 和 不在下面的 providers[] 中注入也能用？？？
// import { AxiosService } from "./services/axios.service";

// 路由组件
import { AppRoutingModule } from './app-routing.module';

// 根组件
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormComponent } from './components/form/form.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';

import { SearchComponent } from './components/search/search.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

import { HomeComponent } from './views/home/home.component';

import { DataBindingComponent } from './views/data-binding/data-binding.component';
import { DataInteractionComponent } from './views/data-interaction/data-interaction.component';

import { DomComponent } from './views/dom/dom.component';
import { Dom2Component } from './views/dom2/dom2.component';

import { TongXunComponent } from './views/tong-xun/tong-xun.component';
import { ViewChildComponent } from "./views/tong-xun/view-child/view-child.component";

import { LifeCycleComponent } from './views/life-cycle/life-cycle.component';

import { NewsComponent } from './views/news/news.component';
import { NewsInfoComponent } from './views/news-info/news-info.component';
import { GoodsComponent } from './views/goods/goods.component';
import { GoodsInfoComponent } from './views/goods-info/goods-info.component';
import { ZdyModuleComponent } from './views/zdy-module/zdy-module.component';


// @NgModule装饰器, @NgModule接受一个元数据对象，告诉 Angular 如何编译和启动应用
@NgModule({

  // 配置当前项目运行的的组件
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    FooterComponent,
    FormComponent,
    SearchComponent,
    ToDoListComponent,
    DomComponent,
    Dom2Component,
    TongXunComponent,
    ViewChildComponent,
    LifeCycleComponent,
    RxjsComponent,
    DataInteractionComponent,
    NewsInfoComponent,
    DataBindingComponent,
    GoodsComponent,
    GoodsInfoComponent,
    ZdyModuleComponent
  ],

  // 配置 注入 当前模块运行依赖的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    // api
  ],

  // 配置项目所需要的服务
  providers: [
    // AxiosService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    StorageService
  ],

  // 指定应用的主视图（称为根组件） 通过引导根AppModule来启动应用  ，这里一般写的是根组件
  bootstrap: [AppComponent]
})

// 根模块不需要导出任何东西，   因为其它组件不需要导入根模块
export class AppModule { }
