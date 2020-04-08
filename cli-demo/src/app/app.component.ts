// 引入核心模块里面的Component
import { Component } from '@angular/core';

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
  public title = 'cli-demo 666';

  // 构造函数
  constructor() {

  };
}
