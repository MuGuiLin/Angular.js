import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit {
  static counts: number = 0;

  public name: string = '';
  public oldName: string = '';

  public show: boolean = true;
  constructor() {
    console.warn('+++++++++++ 00、构造函数，constructor()，初始化局部变量');
  }

  ngOnChanges(): void {
    //在任何其他生命周期挂钩之前调用。 使用它来注入依赖关系，但在这里避免任何认真的工作。
    //将“ $ {implements OnChanges}”添加到类中。
    // console.warn('+++++++++++ 01、生命周期钩子，ngOnChanges()，当被绑定的输入属性的值发生变化时调用（如，有父子组件传值时就会触发）');
  }

  ngOnInit() {
    console.warn('+++++++++++ 02、生命周期钩子，ngOnInit()，当进行初始ajax请求数据时');
  }

  ngDoCheck(): void {
    //每次检查组件或指令的输入属性时调用。 使用它通过执行自定义检查来扩展更改检测。
    //在类中添加“ implements DoCheck”。
    // console.warn('+++++++++++ 03、生命周期钩子，ngDoCheck()，检查组件或指令的输入属性时调用');

    if (this.name !== this.oldName) {
      console.info(`你从：${this.oldName} ，改成了：${this.name}`);
      this.oldName = this.name;
    } else {
      // console.log('没有改变地调用了：' + LifeCycleComponent.counts++ + '次');
    }
  }

  ngAfterContentInit(): void {
    //初始化组件或指令的内容后，在ngOnInit之后调用。
    //将“ implements AfterContentInit”添加到类中。
    console.warn('+++++++++++ 04、生命周期钩子，ngAfterContentInit()，当把内容投影到组件之后调用');
  }

  ngAfterContentChecked(): void {
    //在每次检查组件或指令的内容之后调用。
    //将“ implements AfterContentChecked”添加到类中。
    // console.warn('+++++++++++ 05、生命周期钩子，ngAfterContentChecked()，每次完成内容投影到组件的变更检测之后调用');
  }

  ngAfterViewInit(): void {
    //初始化组件的视图后，在ngAfterContentInit之后调用。 仅适用于组件。
    //将“ implements AfterViewInit”添加到类中。
    console.warn('+++++++++++ 06、生命周期钩子，ngAfterViewInit()，初始化完成组件视图及子视图之后调用，（dom操作应放在这里面）');
  }

  ngAfterViewChecked(): void {
    //在每次检查组件视图之后调用。 仅适用于组件。
    //将“ implements AfterViewChecked”添加到类中。
    // console.warn('+++++++++++ 07、生命周期钩子，ngAfterViewChecked()，每次完成组件视图及子视图的变更检测之后调用');
  }

  ngOnDestroy(): void {
    //在实例销毁之前调用一次。
    //将“ implements OnDestroy”添加到类中。
    console.warn('+++++++++++ 08、生命周期钩子，ngOnDestroy()，在实例销毁之前调用一次');
  }

  update() {
    this.name = 'MuGuiLin'
  }

  showFn() {
    this.show = !this.show;
  }


}
