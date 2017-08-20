import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    const slug = this.route.snapshot.queryParams;
    console.log(slug);

    this.menuService.submenuChanged
      .subscribe((change) => {
        this.name = change[0];
        this.description = change[1];
        // console.log('name', this.name, change[0]);
        // console.log('description', change[1]);
      });
  }

}
