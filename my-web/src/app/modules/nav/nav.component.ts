import { Component, OnInit } from '@angular/core';

import nav from "./nav.navdata";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public nav: any[] = nav;

  public tree: any[];

  public keyWords: string = '';

  public history: any[] = [];

  public keyWordsList: any[] = [];

  constructor() {

  }

  ngOnInit() {
    this.tree = this.FlatToTree(nav, 0);
    console.log(this.tree);

    let flat = this.TreeToFlat(this.tree);
    console.log(flat);
  }

  onSearchFn() {
    // window.location.href = `https://www.baidu.com/s?wd=${this.keyWords}`;
    window.open(`https://www.baidu.com/s?wd=${this.keyWords}`);
  }

  // 扁平转树型数据结构
  FlatToTree(data, pid) {
    let result = [], temp;
    for (let i = 0; i < data.length; i++) {
      if (data[i].pid === pid) {
        let obj = { id: data[i].id, pid: data[i].pid, name: data[i].name, href: data[i].href, icon: data[i].icon, children: [] };
        temp = this.FlatToTree(data, data[i].id);
        if (temp.length > 0) {
          obj.children = temp;
        }
        result.push(obj);
      }
    }
    return result;
  }

  // 树型转扁平数据结构
  TreeToFlat(data) {
    return data.reduce((arr, { id, pid, name, href, icon, children = [] }) => arr.concat([{ id, pid, name, href, icon }], this.TreeToFlat(children)), []);
  }

  // 获取父级
  getParent(data, id) {
    let self = this.getSelf(data, id);
    return this.getSelf(data, self.pid);
  }
  // 获取所有父级
  getAllParent(data, id) {
    let parent = this.getParent(data, id);
    let allParent = [];
    while (parent) {
      allParent.unshift(parent);
      parent = this.getParent(data, parent.id);
    }
    return allParent;
  }
  // 获取自己
  getSelf(data, id) {
    return data.filter(item => id == item.id);
  }
  // 获取子级
  getChild(data, pid) {
    return data.filter(item => pid == item.pid);
  }

}
