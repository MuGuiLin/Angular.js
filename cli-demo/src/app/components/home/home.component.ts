import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public picUrl: string;
  public picGif: string = 'https://inews.gtimg.com/newsapp_match/0/3034305235/0';
  constructor() {
    this.init();
  }
  init() {
    this.picUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583860565667&di=da5d081119f9b40b544ca8655e7b8bb9&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130731%2F655609_093309627123_2.jpg';
  }

  ngOnInit() {
  }

}
