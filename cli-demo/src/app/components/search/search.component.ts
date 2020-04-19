import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";


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

  searchInput() {
    this.debounce(this.keyListAjax(), 5000);
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
