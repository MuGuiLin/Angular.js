import { Component, OnInit } from '@angular/core';

// 引入公共StorageService服务模块
import { StorageService } from "../../services/storage.service";

// 使用方式，但这种方式不推荐，而推荐在constructor(public storage: StorageService)中去接收使用
// const storage = new StorageService();
// console.log(storage);


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})


export class ToDoListComponent implements OnInit {

  public matter: any[] = [];

  public matterOk: number = 0;
  public matterNo: number = 0;

  constructor(public storage: StorageService) {
    console.log('这是推荐使用服务的方式：', storage);
    // console.log(storage.get());
    // console.log(storage.set());
    // console.log(storage.del());

  }

  ngOnInit() {

    // 页面初始化时，获取本地数据
    let matter:any = this.storage.get('matter');
    if(matter) {
      this.matter = matter;
    }
  }

  objArrIsReset(objArr, key, value) {

    // 判断数据中是否有已存在的对象值

    /* 注：用forEach会有 异步问题，因为最下面的return false; 还没等到forEach结束就返回了
      objArr.forEach((element, index) => {
          if(value == element[key]){
            return true;
          }
      }); 
    */

    for (let i = 0; i < objArr.length; i++) {
      if (value == objArr[i][key]) {
        return true;
      }
    };

    return false;
  }

  saveData() {
    // 数据本地持久化
    this.storage.set('matter', this.matter);
  }


  addMatter(e) {
    if (13 == e.keyCode) {
      let value = e.target.value;
      if (value) {
        if (!this.objArrIsReset(this.matter, 'title', value)) {
          this.matter.unshift({
            title: value,
            status: 0
          });
          e.target.value = '';
          console.log(this.matter);

          // 数据本地持久化
          this.saveData();
        } else {
          alert('您输入的待办事项已存在！');
        }
      } else {
        alert('请输入待办事项！');
      }
    }
  }

  delMatter(i) {
    if (confirm(`您确定要删除【${this.matter[i].value}】这个事项吗？`)) {
      this.matter.splice(i, 1);
      this.saveData();
    }
  }

  onChange() {
    this.saveData();
  }

}
