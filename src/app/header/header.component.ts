import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./_header.scss']
})
export class HeaderComponent implements OnInit {
  isShow = false;
  constructor() { }

  ngOnInit() {
  }

}
