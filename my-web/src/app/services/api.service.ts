import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public __URL__: string;

  public __NET__: string;

  public __WSS__: string;

  public tianqiapi: string = '//tianqiapi.com/api';

  constructor() {

    this.__URL__ = 'http://a.itying.com/';

  }
}
