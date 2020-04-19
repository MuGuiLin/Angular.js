import { Component, OnInit } from '@angular/core';

import { AjaxService } from "../../../services/ajax.service";

@Component({
  selector: 'app-dishlist',
  templateUrl: './dishlist.component.html',
  styleUrls: ['./dishlist.component.scss']
})
export class DishlistComponent implements OnInit {

  public list: any[] = [];

  constructor(public ajax: AjaxService) { }

  ngOnInit() {
    this.ajax.get({ api: 'api/productlist' }).then((res: any) => {

      this.list = res.result;

    }, err => {
      console.log('API数据请求失败！');

    })

  }

}
