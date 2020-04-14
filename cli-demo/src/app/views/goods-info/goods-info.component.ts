import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-goods-info',
  templateUrl: './goods-info.component.html',
  styleUrls: ['./goods-info.component.scss']
})
export class GoodsInfoComponent implements OnInit {

  public queryPar:any;

  constructor(private aRotuer: ActivatedRoute) { }

  ngOnInit() {

    // if ('{}' != JSON.stringify(this.aRotuer.queryParams._value)) {

      // 普通get传参获取 queryParams 
      this.aRotuer.queryParams.subscribe((par) => {

        this.queryPar = par;
        console.log(par);

      });

    // } else {

      // 动态路由传参获取 params
      this.aRotuer.params.subscribe((par) => {

        this.queryPar = par;

        console.log(par);

      });
    // }
  }

}
