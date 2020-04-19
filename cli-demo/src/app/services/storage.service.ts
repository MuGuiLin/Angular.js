import { Injectable } from '@angular/core';

//RxJS 是使用 Observable 的响应式编程的库，它使编写异步或基于回调的代码更容易。现在Angular自动继承，所以直接引用无需下载安装！！
import { Observable } from "rxjs";

/**
 * 服务是一个公共模块：
 *      1、所有组件都可以访问、调用服务 但是，注：服务 不能访问 组件。
 *      2、服务 与 服务之间可以相互访问。
 *      3、组件 与 组件之间不能相互访问，但父子组件可以相互传值。
 **/

@Injectable({
  providedIn: 'root'
})
// 本地数据存储
export class StorageService {

  public storage: any = window.localStorage;

  constructor() {

  }

  set(key: string, val: any) {
    this.storage.setItem(key, JSON.stringify(val));
  };

  get(key: string) {
    return JSON.parse(this.storage.getItem(key));
  };

  del(key: string) {
    this.storage.removeItem(key);
  }
};



@Injectable({
  providedIn: 'root'
})
// 网络数据请求
export class getData {

  private interval1: any = null;

  private interval2: any = null;

  private interval3: any = null;

  constructor() {

  }

  // 同步获取数据
  synchronize() {
    return { data: '我是服务中的同步数据' };
  };

  // 异步获取数据 之 回调函数
  asynchronous(cb) {
    clearTimeout(this.interval1);

    this.interval1 = setTimeout(() => {
      cb({ data: '我是服务中的异步数据 ------> callBack' });
    }, 2000);
  };

  // 异步获取数据 之 Promise
  getPromise() {
    return new Promise((resolve, reject) => {
      clearTimeout(this.interval2);

      this.interval2 = setTimeout(() => {

        resolve({ data: '我是服务中的异步数据 ------> Promise' });
      }, 3000);

      // reject('失败时执行');
    });
  };

  // 异步获取数据 之 Rxjs （Rxjs和上面的Promise很相像，但Rxjs很强大，它是微软的）
  getRxjsData(s:any = 4000) {
    return new Observable((observer) => {
      clearTimeout(this.interval3);

      this.interval3 = setTimeout(() => {

        observer.next({ data: '我是服务中的异步数据 ------> Rxjs' });
      }, s);

      // observer.error('错误时执行');
    })
  };

}
