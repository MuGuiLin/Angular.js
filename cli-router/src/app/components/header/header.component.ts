import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public nav: any[] = [];

  constructor() {
    this.nav = [
      { name: '首页', path: '/home' },
      { name: '新闻', path: '/news' },
      { name: '产品', path: '/goods' },
      { name: '菜品', path: '/dish' },
      { name: '系统', path: '/system' },
      { name: '我的', path: '/user' },
    ]
  }

  ngOnInit() {
  }

}
