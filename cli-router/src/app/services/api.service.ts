import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public __URL__: string;

  public __NET__: string;

  public __WSS__: string;

  constructor() {

    this.__URL__ = 'http://a.itying.com/';

  }
}
