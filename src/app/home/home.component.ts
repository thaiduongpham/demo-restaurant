import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./_home.scss']
})
export class HomeComponent implements OnInit {

  lat: number = 52.5250871;
  lng: number = 13.367208;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onOpenMenu() {
    this.router.navigate(['menu'], { relativeTo: this.route });
  }

  onOpenSpecials() {
    this.router.navigate(['specials'], { relativeTo: this.route });
  }

}
