import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Contact } from '../contact/contact.model';
import { Category } from './../menu/category/category.model';
import { MenuDetail } from './../menu/menu-detail/menu-detail.model';

@Injectable()
export class BackendService {

  static BASE_URL = 'https://duong-restaurant-server.herokuapp.com/';
  
  // Use Firebase to store Contact Info
  static FIREBASE_URL = 'https://fir-restaurant-a9dc8.firebaseio.com/';
  loading = new Subject<boolean>();

  constructor(private http: Http) { }

  getCategories(): Promise<Category[]> {
    return this.http.get(`${BackendService.BASE_URL}/categories.json`)
      .toPromise()
      .then((response: Response) => response.json())
      .then(categories => {
        return categories
                .map(category =>
                 Category.fromJSON(category));
      })
      .catch((error: Response) => {
        console.log('error: ', error);
        return Observable.throw('Ooopp... Something went wrong');
      });
  }

  getCategoryContent(shortName: string): Promise<any> {
    return this.http.get(`${BackendService.BASE_URL}menu_items.json?category=${shortName}`)
      .toPromise()
      .then((response: Response) => {
        return response.json();   
      })
      .catch((error: Response) => {
        console.log('error: ', error);
        return Observable.throw('Ooopp... Something went wrong');
      });
  }

  storeContactInfo (contact: Contact) {
    return this.http.post(`${BackendService.FIREBASE_URL}/contact.json`, contact);
  }

}
