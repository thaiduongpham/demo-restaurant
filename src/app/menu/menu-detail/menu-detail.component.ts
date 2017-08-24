import { Component, OnInit, Injectable } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BackendService } from './../../shared/backend.service';
import { MenuDetail } from './menu-detail.model';
import { Category } from './../category/category.model';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./_menu-detail.scss']
})
export class MenuDetailComponent implements OnInit {
  name: string;
  description: string;
  menuDetailList: MenuDetail[];
  // loading: boolean;
  cName: string;
  cDescription: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService) { }

  async ngOnInit() {
    const shortName = this.route.snapshot.params.id;
    // this.loading = true;
    await this.backendService.getCategoryContent(shortName)
      .then(items => {
        this.menuDetailList = items.menu_items.map(item => MenuDetail.fromJSON(item));
        this.cName = items.category.name + ' Menu';
        this.cDescription = items.category.special_instructions;
      });
    // this.loading = false;
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
