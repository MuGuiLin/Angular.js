import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DomComponent implements OnInit {

  public show: boolean = true;

  // 获取 dom节点 @ViewChild()装饰器 对原生js进行了封装 注：（在使用前 一定要在上面先引入import { Component, OnInit, ViewChild } from '@angular/core';）
  @ViewChild('box3') oBox3: any;


  // 获取dom2组件 实例
  @ViewChild('dom2') oDom2: any;


  constructor() {

  }

  ngOnInit() {
    //注：ngOnInit()方法 只是组件和指令初始化完成，并不是真正的dom加载完成！！

    const oBox1: any = document.querySelector('#box1');
    console.log(oBox1.innerHTML);
    oBox1.style.background = 'red';


    //这里就获取不到oBox2的innerHTML 和设置样式，因为oBox2元素上有ng指令！！
    // const oBox2: any = document.querySelector('#box2');
    // console.log(oBox2.innerHTML);
    // oBox2.style.background = 'blue';
  }

  // 视图加载完成后触发的方法，dom加载完成 [所以 一定要把dom操作放在这个方法（生命周期中完成）]
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    const oBox2: any = document.querySelector('#box2');
    console.log(oBox2.innerHTML);
    oBox2.style.background = 'blue';



    console.log('--------我是用@ViewChild()获取到的节点：', this.oBox3);
    // console.log(this.oBox3.nativeElement.innerHTML);

    this.oBox3.nativeElement.style.background = 'green';


    console.log('--------我是用@ViewChild()获取到的组件：', this.oDom2);

    // 调用子组件中的变量
    console.log('调用子组件中的变量：', this.oDom2.text);
  }

  // 调用子组件中的方法
  runMupiao(): void {
    this.oDom2.mupiao('我调用了dom2子组件中的mupiao()方法，并将这些文字设置到了dom2子组件里的h2标签中！！')
  }

  // 调用子组件中的方法
  isShow() {
    this.oDom2.isShowAside();
  }

}
