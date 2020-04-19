import { Injectable } from '@angular/core';

//RxJS 是使用 Observable 的响应式编程的库，它使编写异步或基于回调的代码更容易。现在Angular自动继承，所以直接引用无需下载安装！！
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

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
      setTimeout(() => {

        resolve({ data: '我是服务中的异步数据 ------> Promise' });
      }, 3000);

      // reject('失败时执行');
    });
  };

  // 异步获取数据 之 Promise 多次执行返回 !!! 
  getPromiseMany() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(Date.now());  // 不能多次执行resolve
      }, 1000);
    });
  };

  // 异步获取数据 之 Rxjs （Rxjs和上面的Promise很相像，但Rxjs很强大（如 它可以中途撤回，而Promise不行），它是微软的）
  getRxjsData(s: any = 4000) {
    return new Observable((observer) => {

      setTimeout(() => {

        observer.next({ data: '我是服务中的异步数据 ------> Rxjs' });
      }, s);

      // observer.error('错误时执行');
    })
  };

  // 异步获取数据 之 Rxjs多次执行返回
  getRxjsMany() {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(Date.now());
      }, 1000);
    });
  };

  // 异步获取数据 之 Rxjs多次执行返回
  getRxjsManyNum() {
    let count: number = 0;
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(count++);
      }, 1000);
    });
  };

}


