import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tong-xun',
  templateUrl: './tong-xun.component.html',
  styleUrls: ['./tong-xun.component.scss']
})
export class TongXunComponent implements OnInit {

  public text: string = '我是父组件中的字符串变量';

  public PI: number = Math.PI;

  public json: any = { name: '沐枫', age: 29, sex: '男', job: 'Web全栈工程师' }

  @ViewChild('childPage', { static: false }) childPage: any;

  public childData: any;

  constructor() { 

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    // console.log('***************获取子组件中的实例：', this.childPage);

  }

  parentFn(par) {
    alert('我是父组件app中的方法，我可以接收子组件tong-xun在调用时传过来的参数：' + par);
  }

  parentFn2(par) {
    alert('我是父组件app中的方法，我监听广播到接收子组件tong-xun在调用时传过来的参数：' + par);
  }

  runChildFn() {
    this.childData = this.childPage.skill;
    this.childPage.childFn(888);
  }

  getChildObj() {

    console.log('***************获取子组件tong-xun中的实例：', this.childPage);
    alert(this.childPage);
  }

}
