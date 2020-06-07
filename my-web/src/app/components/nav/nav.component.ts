import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public nav: any[] = [
    {
      path: '/about', name: '关于我', icon: 'address card', link: false
    },
    {
      path: '/blog', name: '博客', icon: 'book', link: false
    },
    {
      path: '/chat', name: '聊天室', icon: 'comments', link: false
    },
    {
      path: '/tv', name: '看电视', icon: 'tv', link: false
    },
    {
      path: '//github.com/MuGuiLin', name: 'GitHub', icon: 'github', link: true
    },
    {
      path: '//blog.csdn.net/muguli2008', name: 'CSDN', icon: 'cuttlefish', link: true
    },
    {
      path: '/nav', name: '前栈导航', icon: 'telegram plane', link: false
    }
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
