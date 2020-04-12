import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tong-xun',
  templateUrl: './tong-xun.component.html',
  styleUrls: ['./tong-xun.component.scss']
})
export class TongXunComponent implements OnInit {

  //接收父组件传过来的变量 注：接收时的变量名一定要和从父组件传过来的属性名要对应！！
  @Input() text: string;

  @Input() pi: number;

  @Input() obj: any;

  // 接收父组件传过来的方法
  @Input() fn: any;


  // 接收父组件传过来的整个实例
  @Input() app: any;

  @Output() private mupiao = new EventEmitter();

  public examples: any = null || undefined;

  public msg: string = '我是子组件中的变量数据';

  public skill: any = {h5: 'vidoe, audio', cs3: 'flex, grid', es6: 'fetch, promise'};

  constructor() { 

  }

  ngOnInit() {
    console.log('-------获取父组件app传过来的数据：', this.text, this.pi, this.obj);
    console.log('-------获取父组件app的整个实例：', this.app);
  }

  ngOnChanges(): void {
   console.error('监听到组件有数据发生变化！');
  }

  runParentFn() {
    //注：这参数传来过的方法
    this.fn('-----我是子组件tong-xun传过来的参数！！');
  }

  setParentFn() {
    this.mupiao.emit('我是子组的数据');
  }

  getParentObj() {
    console.log('-------获取父组件app的整个实例：', this.app);

    console.log('-------获取父组件app实例的数据：', this.app.text);

    console.log('-------调用父组件app实例的方法：this.app.parentFn(666)', this.app.parentFn(666));
    
    this.examples = this.app.json;
  }

  childFn(par) {
    alert('我是子组件tong-xun中的方法，我可以接收父组件在调用时传过来的参数：' + par);
  }

}
