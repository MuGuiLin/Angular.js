import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { NavModule } from './modules/nav/nav.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,

    HttpClientModule, 
    HttpClientJsonpModule,
    
    AppRoutingModule,

    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
