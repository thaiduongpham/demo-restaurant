import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Category } from './category/category.model';
import { BackendService } from '../shared/backend.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./_menu.scss']
})
export class MenuComponent implements OnInit {

  categories: Array<Category>;

  constructor(private backendService: BackendService) { }
  
  async ngOnInit() {
    this.backendService.loading.next(true);
    await this.backendService.getCategories()
      .then(categories => this.categories = categories);
    this.backendService.loading.next(false);
  }

}
