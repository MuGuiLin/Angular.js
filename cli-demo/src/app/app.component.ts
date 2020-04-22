// 引入核心模块里面的Component
import { Component } from '@angular/core';

@Component({

  // 根组件的名称
  selector: 'app-root',

  // 根组件结构
  templateUrl: './app.component.html',

  // 根组件样式
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // 自定义属性
  public title: string = 'cli-demo 666';

  public random: number = Math.random();

  // 构造函数
  constructor() {

  };


}
