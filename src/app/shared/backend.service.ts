import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Category } from './../menu/category/category.model';

@Injectable()
export class BackendService {

  baseURL = 'https://duong-restaurant-server.herokuapp.com/';

  constructor(private http: Http) { }

  getMenuItem() {
    return this.http.get(`${this.baseURL}/menu-items.json`)
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: Response) => {
        return Observable.throw('Ooopp... Something went wrong');
      });
  }

  getCategories() {
    return this.http.get(`${this.baseURL}/categories.json`)
      .toPromise()
      .then((response: Response) => response.json())
      .then(categories => {
        const list = categories.map((category) =>
          new Category(category.name,
            `${this.baseURL}/images/menu/${category.short_name}/${category.short_name}.jpg`,
            category.short_name,
            category.special_instructions));
        return list;
      })
      .catch((error: Response) => {
        console.log('error: ', error);
        return Observable.throw('Ooopp... Something went wrong');
      });
  }

}
