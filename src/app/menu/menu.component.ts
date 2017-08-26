import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Category } from './category/category.model';
import { BackendService } from '../shared/backend.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./_menu.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  categories: Array<Category>;
  loading: boolean;
  subscription: Subscription;

  constructor(private backendService: BackendService) { }

  async ngOnInit() {
    this.loading = true;
    await this.backendService.getCategories()
      .then(categories => this.categories = categories);

    this.loading = false;
    
    this.subscription = this.backendService.loading
      .subscribe(value => {
        console.log('loading value: ', value);
        this.loading = value;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
