import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'user', loadChildren: './modules/user/user.module#UserModule'
  },
  {
    path: 'news', loadChildren: './modules/news/news.module#NewsModule'
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
