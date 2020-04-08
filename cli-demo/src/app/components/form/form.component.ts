import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public user: any | undefined = {};
  public data: any | undefined = {};

  constructor() {
    this.user = {
      name: '',
      sex: '0',
      age: '16',
      datetime: '2020-03-20T10:16:58',
      color: '#808080',
      cityList: [
        { value: 1, name: '上海' },
        { value: 2, name: '重庆' },
        { value: 3, name: '北京' },
        { value: 4, name: '深圳' },
        { value: 5, name: '贵阳' },
      ],
      city: '5',
      phone: '',
      hobby: [
        { value: '学习', checked: false },
        { value: '运动', checked: false },
        { value: '旅游', checked: true },
      ],
      mark: ''

    }
  }

  ngOnInit() {

  }

  submit() {

    // 原生数据获取方式
    // let name: any = document.querySelector('#user-name');
    // alert(name.value)

    this.data = this.user;
  }

};
