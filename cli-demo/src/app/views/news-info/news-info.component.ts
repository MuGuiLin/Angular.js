import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.scss']
})
export class NewsInfoComponent implements OnInit {

  public par: any;

  public zt: number;

  constructor(public aRouter: ActivatedRoute) { // aRouter名字自定义

  }

  ngOnInit() {

    console.log('-----------ActivatedRoute参数对象：', this.aRouter);
    // 注：subscribe是Rxjs的写法哦！


    // if ('{}' != JSON.stringify(this.aRouter.queryParams._value)) {
      
      // 普通get传参获取 queryParams 
      this.aRouter.queryParams.subscribe((par) => {

        this.par = par;

        this.zt = par.zt;

        console.log(par);

      });

    // } else {

      // 动态路由传参获取 params
      this.aRouter.params.subscribe((par) => {

        this.par = par;

        console.log(par);

      });
    // }
  }

}
