import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public nav: any[] = [
    { path: '/about', name: '关于我', icon: '' },
    { path: '/blog', name: '博客', icon: '' },
    { path: '/nav', name: '工具导航', icon: '' }
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
