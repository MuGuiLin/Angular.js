// 引入核心模块里面的Component
import { Component, ViewChild } from '@angular/core';

@Component({

  // 使用这个组件的名称
  selector: 'app-root',

  // 组件结构
  templateUrl: './app.component.html',

  // 组件样式
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // 定义属性
  public title: string = 'cli-demo 666';

  public text: string = '我是父组件中的字符串变量';

  public PI: number = Math.PI;

  public json: any = { name: '沐枫', age: 29, sex: '男', job: 'Web全栈工程师' }

  @ViewChild('tongXun', { static: false }) tongXun: any;

  public childData: any;

  public random: number = Math.random();

  // 构造函数
  constructor() {

  };

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    // console.log('***************获取子组件中的实例：', this.tongXun);
    
    
  }

  parentFn(par) {
    alert('我是父组件app中的方法，我可以接收子组件tong-xun在调用时传过来的参数：' + par);
  }

  parentFn2(par) {
    alert('我是父组件app中的方法，我监听广播到接收子组件tong-xun在调用时传过来的参数：' + par);
  }

  runChildFn(){
    this.childData = this.tongXun.skill;
    this.tongXun.childFn(888);
  }

  getChildObj(){
    
    console.log('***************获取子组件tong-xun中的实例：', this.tongXun);
    alert(this.tongXun);
  }
}
