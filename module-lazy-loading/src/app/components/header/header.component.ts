import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public nav: any[] = [
    {
      name: '首页', path: '/home', icon: 'home'
    },
    {
      name: '关于', path: '/about', icon: 'new_releases'
    },
    {
      name: '新闻', path: '/news', icon: 'import_contacts'
    },
    {
      name: '我的', path: '/user', icon: 'verified_user'
    }
  ]
  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
   

  }

}
