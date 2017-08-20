import { Submenu } from './submenu/submenu.model';
import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./_menu.scss']
})
export class MenuComponent implements OnInit {

  submenuList: Array<Submenu>;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.submenuList = this.menuService.getSubmenuList();
  }

}
