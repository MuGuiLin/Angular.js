import { Injectable } from '@angular/core';

import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  // public dataType: string = 'JSON';

  constructor() { 

  }

  axiosGet(obj) {
    return new Promise((resovle, reject) => {
      axios.get(obj.url, {
        params: obj.params
      })
      .then(function (response) {
        resovle(response);
      })
      .catch(function (error) {
        reject(error);
      })
      .finally(function () {
        obj.finally && obj.finally();
      });  
    })

  };

  axiosPost(obj) {
    return new Promise((resovle, reject) => {
      axios.post(obj.url, obj.data)
      .then(function (response) {
        resovle(response);
      })
      .catch(function (error) {
        reject(error);
      });
    })
  };

};
