import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import axios from "axios";

import { AxiosService } from "../../services/axios.service";

@Component({
  selector: 'app-data-interaction',
  templateUrl: './data-interaction.component.html',
  styleUrls: ['./data-interaction.component.scss']
})
export class DataInteractionComponent implements OnInit {

  public __URL__: string = 'http://a.itying.com';

  public getData: any[] = [];

  public postData: any = {};

  public jsonpData: any;

  constructor(public http: HttpClient, public axios: AxiosService) {


  }

  ngOnInit() {

  };

  filterPath(par) {
    return par.replace(/\\/g, '/');
  }



  httpGet() {
    // subscribe 是Rxjs中的封装的
    let api = this.__URL__ + "/api/productlist";
    // let api = 'https://www.easy-mock.com/mock/5d48e8d73dbe173654aeece6';
    this.http.get(api, {
      params: {
        id: '106',
        page: '5'
      }
    }).subscribe((res: any) => {
      // this.getData = res.result;
      alert(this.getData)
      console.log(this.getData);
    })

    axios.get(api).then((res: any) => {

      this.getData = res.data.result;
    })
  };




  
  httpPost() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    let api = "http://127.0.0.1:3000/login";

    // 内置的post
    this.http.post(api, {
      name: 'mupiao',
      pwds: 123456,
      age: 29,
      job: 'Web全栈开发'
    }, httpOptions).subscribe((res: any) => {
      console.log(res.data);
    })

    // 原来的axiso
    axios.post(api, {
      name: 'mupiao',
      pwds: 123456,
      age: 29,
      job: 'Web全栈开发'
    }).then((res: any) => {
      console.log('原来的axiso：', res.data);
    });

    // 在服务中用Promise封装过的axios
    this.axios.axiosPost({
      url: api, data: {
        name: 'mupiao',
        pwds: 123456,
        age: 29,
        job: 'Web全栈开发'
      }
    }).then((res: any) => {
      console.log('在服务中用Promise封装过的axios：', res.data);
      this.postData = res.data;
    }, (err) => {
      console.log(err);
    })
  };




  httpJsonp() {
    let api = this.__URL__ + "/api/productlist";

    // 内置的jsonp
    this.http.jsonp(api, 'callback').subscribe((res: any) => {

      this.jsonpData = res;
      console.log(this.jsonpData);
    });

    this.http.jsonp('http://127.0.0.1:3000/list', 'callback').subscribe((res: any) => {

      this.jsonpData = res;
      console.log(res);

    });

    // 百度搜索 中国
    this.http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=中国', 'cb').subscribe((res: any) => {
      // this.jsonpData = res;
      console.log(res);

    });

  };





  axiosGet() {
    let api = this.__URL__ + "/api/productlist";

    this.axios.axiosGet({ url: api }).then((res: any) => {

      console.log('在服务中封装的axios', res.data);
    }, (err) => {

      console.log(err);
    })
  }

}
