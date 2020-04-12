import { Component, OnInit } from '@angular/core';

// 引入公共StorageService服务模块
import { RequestService } from "../../services/request.service";


import { fromEvent } from 'rxjs';
// Rxjs常用工具函数
import { map, filter, throttleTime } from "rxjs/operators";


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  private count: number = 0;

  public timestamp: any = null;

  constructor(public request: RequestService) {


  }

  ngOnInit() {

    // 1、同步获取数据
    let data1 = this.request.synchronize();
    console.log('-------------同步获取数据：', data1);


    // 2、callBack异步获取数据 
    this.request.asynchronous((data) => {
      console.log('-------------callBack异步获取数据：', data);
    });


    // 3、Promise异步获取数据
    let promiseData = this.request.getPromise();
    promiseData.then((res) => {
      console.log('-------------promise异步获取数据：', res);
    }, (err) => {

    });

    // 多次执行（Promise做不到，Promise只能执行1次）
    let promiseMany = this.request.getPromiseMany();
    promiseMany.then((res) => {
      console.log('-------------promise只能执行1次：', res);
    }, (err) => {

    });


    // 4、Rxjs异步获取数据
    let rxjsData = this.request.getRxjsData();
    rxjsData.subscribe((res) => {
      console.log('-------------Rxjs异步获取数据：', res);
    });


    // 5、Rxjs中途撤回
    let rxjsData2 = this.request.getRxjsData(5000);
    let sub = rxjsData2.subscribe((res) => {
      console.log('-------------Rxjs异步获取数据：', res);
    });

    // 2秒后取消执行
    setTimeout(() => {
      sub.unsubscribe();   // 撤回、取消订阅  注：Promise就没法这样！
    }, 2000);


    // 6、Rxjs之多次执行 （这是Promise做不到的）
    let many = this.request.getRxjsMany();
    let submany = many.subscribe((res) => {
      this.timestamp = res;
      console.log('-------------Rxjs异步获取数据：', res);
    });

    setTimeout(() => {
      submany.unsubscribe();   // 撤回、取消订阅  注：Promise就没法这样！
    }, 6000);

    // 7、Rxjs之 map，filter工具函数
    // let manyNum = this.request.getRxjsManyNum();

    // // pipe管道 传入 filter
    // manyNum.pipe(
    //   filter((item: number) => {
    //     if (0 == item % 2) {
    //       return true;
    //     }
    //   }),
    //   map((item: number) => {
    //     return item * item;
    //   })
    // ).subscribe((res) => {
    //   console.log('工具函数filter 过滤后再 map 循环输出：', res);
    // });

    // pipe管道中的工具函数 可以分开，也可以合并执行！！！
    // manyNum.pipe(map((item: number) => {
    //     return item * item;
    // })).subscribe((res) => {
    //     console.log('map 过滤工具函数', res);
    //   });


  };

  ngAfterViewInit(): void {

    // Rxjs 延迟执行
    var button = document.querySelector('#button');
    fromEvent(button, 'click').pipe(
      throttleTime(5000)
    ).subscribe(() => {
      alert(`执行了${ ++this.count }次 `);
    });

  }



}
