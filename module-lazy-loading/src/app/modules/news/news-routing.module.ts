import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { NewsSearchComponent } from './views/news-search/news-search.component';
import { NewsListComponent } from './views/news-list/news-list.component';
import { NewsInfoComponent } from './views/news-info/news-info.component';

const routes: Routes = [
  {
    path: '', component: NewsComponent,
    children: [
      {
        path: 'newssearch', component: NewsSearchComponent
      }
    ]
  },
  {
    path: 'newslist', component: NewsListComponent
  },
  {
    path: 'newsinfo', component: NewsInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
