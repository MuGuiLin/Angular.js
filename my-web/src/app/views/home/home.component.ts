import { Component, OnInit } from '@angular/core';

import { ApiService } from "../../services/api.service";
import { AjaxService } from "../../services/ajax.service";

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private weather: any = {};

  constructor(public api: ApiService, public ajax: AjaxService) { }

  ngOnInit() {

  }

  getWeather() {
    this.ajax.get({
      api: this.api.tianqiapi,
      opt: {
        params: {
          version: 'v6',
          appid: 53767848,
          appsecret: 'gaLdkW1o'
        }
      }
    }).then((res: any) => {
      this.weather = res.body;

    }, error => {
      console.error('API数据请求失败！', error);

    });
  }

  ngAfterViewInit(): void {
    this.getWeather();

    $('.nav-box').transition('horizontal flip in');

  }

}
