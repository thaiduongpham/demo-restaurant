import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { BackendService } from './shared/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  loading: boolean;
  subscription: Subscription;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.subscription = this.backendService.loading
      .subscribe(value => this.loading = value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
