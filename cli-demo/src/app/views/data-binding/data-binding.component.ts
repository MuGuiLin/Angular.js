import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public attr: string = '我是用[title]="text"来绑定的属性!';

  public content: string = '<h2>我是一个html的h3标签 用[innerHTML]="content"来渲染</h2>';

  public picUrl: string;

  public picGif: string = 'https://inews.gtimg.com/newsapp_match/0/3034305235/0';

  private ngIf: boolean = true;

  public ngSwitch: number = 2;

  public ngClass: string = `[ngClass]="{'className': true, 'className2': false}" `;

  public ngStyle: string = ` [ngStyle]="{'cssName': val}"`;

  public ngCss: string = `{"padding": "10px 20px", "line-height": "50px", "background": "red"}`;

  public stamp: number = Date.now();

  public letter: string = 'AbCdeFg';

  public number: number = 2048.56;

  public colorArr: Array<string | number> = ['red', 'orange', 'yellor', 'green', 'cyan', 'blue', 'purple'];

  public color: any = 'cyan';

  public keyCode: any = '';

  public inputStr: string = '';

  public twoWay: string = `注：双向数据绑定 需要先在 app.module.ts中 引入 import {FormsModule} from '@angular/forms'; 再在添加到模块运行依赖中imports:[FormsModule]`;

  public inputVal: string = '';
  
  protected news: any[] = [
    {
      id: Date.now(),
      title: '新闻标题',
      content: '<b style="color: red;">新闻内容</b>',
      Keywords: [
        {
          name: '中国的这些地方即将花开成海，太美了，真的好想去看看！',
          href: 'https://new.qq.com/omn/20200310/20200310A0R3KD00.html'
        },
        {
          name: '山东日照三日游路线制定，好玩的景点在海边',
          time: new Date()
        }
      ]
    },
    {
      id: Date.now(),
      title: '新闻标题X2',
      content: '新闻内容X2',
      Keywords: [
        {
          name: '避免人员扎堆聚集引发交叉感染！衡阳回雁峰景区将在12日临时封闭一天',
          time: new Date()
        },
        {
          name: '我在平南生态园等你，不见不散',
          href: 'https://new.qq.com/omn/20200310/20200310A0R0EQ00.html'
        },
        {
          name: '关键字X3 总投资3亿，形如“春笋”，吉安市地标性建筑设计赏析',
          time: Date.now()
        }
      ]
    }
  ];

  constructor() {

  }

  init() {
    this.picUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583860565667&di=da5d081119f9b40b544ca8655e7b8bb9&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130731%2F655609_093309627123_2.jpg';
  }

  ngOnInit() {
    this.init();
  }

  Alert(e) {
    let $this: any = e.target;
    $this.style.cssText = `color: red; font-size: 24px`;

    alert('执行了点击事件！');
    console.log($this);
    // console.table($this);
    console.dir($this);
  };

  bgColor() {
    let rand: number = Math.random() * 7;
    this.color = this.colorArr[parseInt(rand.toString())]
  }

  keyDown(e) {
    console.log(e);
    this.inputStr = e.target.value;
    this.keyCode = ` key：${e.key} --> keyCode ：${e.keyCode}`;

    if (13 == e.keyCode) {
      alert('你按下了回车键！');
    }
  }

  keyUp(e) {
    this.keyDown(e);
  }

}
