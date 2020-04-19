import { Component, OnInit } from '@angular/core';

import { AjaxService } from "../../services/ajax.service";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  public menu: any[] = [];

  constructor(public ajax: AjaxService) { }

  ngOnInit() {
    this.ajax.get({ api: 'api/productlist' }).then((res: any) => {
      console.log(res);

      res.result.forEach(item => {
        this.menu.push(
          // { name: item.title, path: '/dish/dishlist' }

        )
      });

      this.menu = [{ name: '菜单列表', path: '/dish/dishlist' }, { name: '菜单详情', path: '/dish/dishinfo' }]

    }, err => {
      console.log('API数据请求失败！');

    })


    return;
    this.ajax.post({ api: 'api/productlist' }).then(res => {
      console.log(res);

    }, err => {
      console.log('API数据请求失败！');

    })
  }

}
