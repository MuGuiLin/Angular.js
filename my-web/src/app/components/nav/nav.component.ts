import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public nav: any[] = [
    { path: '/about', name: '关于我', icon: 'address card' },
    { path: '/blog', name: '博客', icon: 'book' },
    { path: '/chat', name: '聊天室', icon: 'comments' },
    { path: '/tv', name: '电视', icon: 'tv' },
    { path: 'https://github.com/MuGuiLin', name: 'GitHub', icon: 'github' },
    { path: 'https://blog.csdn.net/muguli2008', name: 'CSDN', icon: 'cuttlefish' },
    { path: '/nav', name: '工具导航', icon: 'telegram plane' }
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
