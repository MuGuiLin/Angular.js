import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public nav: any[] = [
    {
      href: '//tinypng.com', name: '图片压缩', icon: 'address card'
    },
    {
      href: '//tool.lu', name: '在线工具', icon: 'book'
    },
    {
      href: '//tool.oschina.net', name: '在线工具', icon: 'comments'
    },
    {
      href: '//www.bootcdn.cn', name: 'BootCDN', icon: 'tv'
    },
    {
      href: '//github.com', name: 'GitHub', icon: 'github'
    },
    {
      href: '//blog.csdn.net', name: 'CSDN', icon: 'cuttlefish'
    },
    {
      href: '//json.cn', name: 'JSON', icon: 'telegram plane'
    },
    {
      href: '//www.runoob.com', name: ' 菜鸟教程', icon: 'address card'
    },
    {
      href: '//caniuse.com', name: '浏览器支持情况', icon: 'book'
    },
    {
      href: '//developer.mozilla.org/zh-CN', name: 'MDN Web Docs', icon: 'comments'
    },
    {
      href: '//www.npmjs.com', name: 'Npm', icon: 'tv'
    },
    {
      href: '//www.51cto.com', name: '51CTO', icon: 'github'
    },
    {
      href: '//www.w3school.com.cn', name: 'W3CSHOOL', icon: 'cuttlefish'
    },
    {
      href: '//www.w3cschool.cn', name: 'W3CSHOOL', icon: 'cuttlefish'
    },
    {
      href: '//www.w3cplus.com', name: 'W3CPLUS', icon: 'cuttlefish'
    },
    {
      href: '//www.w3chtml.com/', name: 'W3CHTML', icon: 'telegram plane'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
