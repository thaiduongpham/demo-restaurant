import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./_home.scss']
})
export class HomeComponent implements OnInit {

  lat = 52.5250871;
  lng = 13.367208;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onOpenMenu() {
    this.router.navigate(['menu'], { relativeTo: this.route });
  }

  onOpenSpecials() {
    this.router.navigate(['menu/SP'], { relativeTo: this.route });
  }

}
