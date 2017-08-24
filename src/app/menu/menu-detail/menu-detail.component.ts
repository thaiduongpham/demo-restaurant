import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { MenuService } from './../menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./_menu-detail.scss']
})
export class MenuDetailComponent implements OnInit {
  name: string;
  description: string;
  menuDetailList = [];

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    const slug = this.route.snapshot.params.id;
    this.menuDetailList = this.menuService.getMenuDetailListBySlug(slug);

  }

  onBack() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
