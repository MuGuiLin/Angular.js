import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  public menu: any[] = [];

  constructor() {
    this.menu = [
      { name: '产品列表', path: '/goods/goodslist' },
      { name: '产品详情', path: '/goods/goodsinfo' }
    ]
  }

  ngOnInit() {
  }

}
