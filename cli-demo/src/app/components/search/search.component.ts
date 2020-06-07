import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import needle from "needle";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyWords: string | undefined;

  public history: any[] = [];

  public keyWordsList: any[] = [];

  constructor(public http: HttpClient) {
    console.log(this);


  }

  ngOnInit() {

  }

  //函数防抖(debounce) 就是：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
  debounce(fun, delay) {
    return function (args) {
      console.log('我一按我就执行：' + args);

      let _this = this;
      clearTimeout(fun.id);
      fun.id = setTimeout(function () {
        fun.call(_this, args);
      }, delay);
    };
  }


  keyListAjax() {
    console.log(this.keyWords);

    let api = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${this.keyWords}`;

    this.http.jsonp(api, 'cb').subscribe((res: any) => {
      if (res && 0 < res.s.length) {
        this.keyWordsList = res.s;
      } else {
        this.keyWordsList.length = 0;
      }
      console.log(res);
    });

  };

  needleData() {
    let api = `http://www.kuwo.cn/api/www/search/searchKey?key=${this.keyWords}`;
    // need.get(api, function(error, response) {
    //   if (!error && response.statusCode == 200)
    //     console.log(response.body);
    // });

    // this.mupiao('get', api)
    //   .then(function (resp) {
    //     // ...
    //   })
    //   .catch(function (err) {
    //     // ...
    //   });
  }

  httpGet() {
    // subscribe 是Rxjs中的封装的

    let val = '青花瓷';
    // let api = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=' + val + '&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1520833663464';
    let api = 'api/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=' + val + '&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1520833663464';

    const Headers: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "referer": 'https://c.y.qq.com/', "host": 'c.y.qq.com' }) };

    // this.http.jsonp(api, 'callback', Headers).subscribe((res: any) => {
    this.http.jsonp(api, 'callback').subscribe((res: any) => {
      console.log(res);

      if (res && 0 < res.s.length) {
        this.keyWordsList = res.s;
      } else {
        this.keyWordsList.length = 0;
      }
    });

    // return;

    // let api = `http://localhost:4200/api/splcloud/fcgi-bin/smartbox_new.fcg?key=${this.keyWords}`;
    // let api = `http://localhost:4200/api/soso/fcgi-bin/client_search_cp?p=1&n=2&w=没那么简单&format=json`;
    // this.http.jsonp(api, 'cb').subscribe((res: any) => {
    //   if (res && 0 < res.s.length) {
    //     this.keyWordsList = res.s;
    //   } else {
    //     this.keyWordsList.length = 0;
    //   }
    //   console.log(res);
    // });
    // return;
    // this.http.get(api, {
    //   Headers
    // params: {
    //   is_xml: 0,
    //   key: this.keyWords,
    //   g_tk_new_20200303: 5381,
    //   g_tk: 5381,
    //   loginUin: 0,
    //   hostUin: 0,
    //   format: 'json',
    //   inCharset: 'utf8',
    //   outCharset: 'utf-8',
    //   notice: 0,
    //   platform: 'yqq.json',
    //   needNewCode: 0
    // }
    // }).subscribe((res: any) => {
    //   console.log(res);
    // })


  };

  searchInput() {
    this.httpGet()
    // this.needleData();
    // this.debounce(this.keyListAjax(), 5000);
  };

  onSelect(par) {
    this.keyWords = par;
    this.keyWordsList.length = 0;
  }

  onSearch() {

    if (!this.keyWords) {
      alert('请输入关键字！');
      return false;
    }

    if (-1 == this.history.indexOf(this.keyWords)) {

      // this.history = [...this.keyWords, ...[this.history]];
      this.history.unshift(this.keyWords);

    } else {
      alert(`${this.keyWords}已经添加过啦，不能重复添加！`);

    }

    this.keyWords = '';
    console.log(this.history);

  }

  delHistory(i) {
    // alert(i);
    if (confirm(`您确定要删除【${this.history[i]}】这个关键字吗？`)) {
      this.history.splice(i, 1);
    }

  }

}
