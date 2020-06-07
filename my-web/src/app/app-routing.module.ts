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
    path: 'blog', loadChildren: './modules/blog/blog.module#BlogModule'
  },
  {
    path: 'chat', loadChildren: './modules/chat/chat.module#ChatModule'
  },
  {
    path: 'nav', loadChildren: './modules/nav/nav.module#NavModule'
  },
  {
    path: 'tv', loadChildren: './modules/tv/tv.module#TvModule'
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
