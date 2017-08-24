import { Category } from './category/category.model';
import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./_menu.scss']
})
export class MenuComponent implements OnInit {

  categories: Array<Category>;
  loading: boolean;

  constructor(private backendService: BackendService) { }

  async ngOnInit() {
    this.loading = true;
    await this.backendService.getCategories().then((categories) => {
      this.categories = categories;
    });
    this.loading = false;
  }

}
