import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
    console.log('-------------Router对象：', this.router);
  }


  jsOpenHome() {

    // js普通路由跳转
    this.router.navigate(['/home']);
    // this.router.navigate(['/goodsinfo']);
  }

  jsOpenRouter() {

    // js动态 传参 路由跳转
    this.router.navigate(['/goodsinfo', '123']);
  }

  jsGetOpen() {

    // js get 传参 路由跳转
    let parObj: NavigationExtras = {
      queryParams: { gid: 456, rmb: '￥998.00', num: 999 }
    }
    this.router.navigate(['/goodsinfo/'], parObj);
  }


}
