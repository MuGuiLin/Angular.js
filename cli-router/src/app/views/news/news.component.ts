import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public menu: any[] = [];

  constructor() {
    this.menu = [
      { name: '新闻列表', path: '/news/newslist' },
      { name: '新闻详情', path: '/news/newsinfo' }
    ]
  }

  ngOnInit() {
  }

}
