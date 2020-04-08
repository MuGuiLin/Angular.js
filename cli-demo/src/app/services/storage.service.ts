import { Injectable } from '@angular/core';

/**
 * 服务是一个公共模块：
 *      1、所有组件都可以访问、调用服务 但是，注：服务 不能访问 组件。
 *      2、服务 与 服务之间可以相互访问。
 *      3、组件 与 组件之间不能相互访问，但父子组件可以相互传值。
 **/

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public storage: any = window.localStorage;
  constructor() {

  }

  set(key: string, val: any) {
    this.storage.setItem(key, JSON.stringify(val));
  };

  get(key: string) {
    return JSON.parse(this.storage.getItem(key));
  };

  del(key: string) {
    this.storage.removeItem(key);
  }

}
