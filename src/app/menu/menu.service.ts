import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Category } from './category/category.model';
import { MenuDetailModel } from './menu-detail/menu-detail.model';
import { BackendService } from './../shared/backend.service';

@Injectable()
export class MenuService {

  categoryChanged = new Subject<Array<string>>();

  constructor(private backendService: BackendService) { }

  getMenuDetailListBySlug(slug: string) {
    switch (slug) {
      case 'lunch':
        return [];
      case 'chicken':
        return [];
      default:
        return [];
    }
  }

}
