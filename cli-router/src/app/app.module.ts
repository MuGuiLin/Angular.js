
// 内置模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

// 自定义模块(当组件太多(上百个)时，会导至页面变慢，所以需要进模块化，按需加载)
import { UserModule } from "./modules/user/user.module";
import { SystemModule } from "./modules/system/system.module";

// 路由模块
import { AppRoutingModule } from './app-routing.module';

// 自定义公共服务
import { AjaxService } from "./services/ajax.service";


// 根组件
import { AppComponent } from './app.component';

// 自定义公共组件
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

// 项目页面组件
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





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    GoodsComponent,
    NewsInfoComponent,
    GoodsInfoComponent,
    GoodsListComponent,
    NewsListComponent,
    MenuComponent,
    DishComponent,
    DishlistComponent,
    DishinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    HttpClientJsonpModule,
    
    UserModule,
    SystemModule
  ],
  providers: [
    AjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
