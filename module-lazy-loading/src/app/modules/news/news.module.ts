import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './views/news-list/news-list.component';
import { NewsInfoComponent } from './views/news-info/news-info.component';
import { NewsSearchComponent } from './views/news-search/news-search.component';


@NgModule({
  declarations: [NewsComponent, NewsListComponent, NewsInfoComponent, NewsSearchComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
