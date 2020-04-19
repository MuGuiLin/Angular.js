import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(public http: HttpClient, public api: ApiService) {

  }

  get(o) {

    return new Promise((resolve, reject) => {

      this.http.get(this.api.__URL__ + o.api).subscribe((response) => {

        resolve(response);
      })
    })
  };

  post(o) {
    return new Promise((resolve, reject) => {

      this.http.post(this.api.__URL__ + o.api, {}).subscribe((response) => {

        resolve(response);
      })

    })
  };

};
