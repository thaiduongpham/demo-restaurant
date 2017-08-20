import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./_submenu.scss']
})
export class SubmenuComponent implements OnInit {
  @Input() submenu;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService) { }

  ngOnInit() { }

  onNavigate(slug: string) {
    this.menuService.submenuChanged.next([this.submenu.name, this.submenu.description]);
    this.router.navigate([slug], { relativeTo: this.route });
  }

}
