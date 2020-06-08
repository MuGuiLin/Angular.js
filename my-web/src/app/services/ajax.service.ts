import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient, private api: ApiService) {

  }

  get(o) {
    return new Promise((resolve, reject) => {

      this.http.get(o.api, o.opt).subscribe((response) => {

        resolve({ body: response });

      }, error => {

        reject(error);
      })
    })
  };

  post(o) {
    return new Promise((resolve, reject) => {

      this.http.post(this.api.__URL__ + o.api, o.body, o.headers).subscribe((response) => {

        resolve({ body: response });

      }, error => {

        reject(error);
      })
    })
  };
}
