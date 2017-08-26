import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BackendService } from './../../shared/backend.service';

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
    private backendService: BackendService) { }

  ngOnInit() { }

  async onNavigate(slug: string) {
    this.backendService.loading.next(true);
    await this.backendService.getCategoryContent(slug)
      .then((data) => console.log(data));
    this.backendService.loading.next(false);
    this.router.navigate([slug], { relativeTo: this.route });
  }

}
