import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./_category.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService) { }

  ngOnInit() { }

  onNavigate(slug: string) {
    // this.menuService.categoryChanged.next([this.category.name, this.category.description]);
    // this.router.navigate([slug], { relativeTo: this.route });
  }

}
