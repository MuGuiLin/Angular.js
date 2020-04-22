import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public newsList: any[] = [];

  constructor() {

    for (let i = 0; i < 10; i++) {
      this.newsList.push({
        id: i + 1,
        title: 'XXX新闻标题。'
      })
    }

  };

  ngOnInit() {

  };

}
