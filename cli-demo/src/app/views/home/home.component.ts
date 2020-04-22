import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public menu: any[] = [
    { name: '数据渲染', link: '/home/datadinding' },
    { name: 'form表单', link: '/home/form' },
    { name: 'dom操作', link: '/home/dom' },
    { name: '本地服务数据', link: '/home/todolist' },
    { name: 'jsonp搜索', link: '/home/search' },
    { name: '组件通迅', link: '/home/tongxun' },
    { name: '生命周期', link: '/home/lifecycle' },
    { name: 'Rxjs', link: '/home/rxjs' },
    { name: '数据请求', link: '/home/getdata' },
    { name: 'Router', link: '/goods' },
    { name: '自定义模块', link: '/home/zdymodule' }
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
