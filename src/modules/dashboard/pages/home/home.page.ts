import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  template: `
    <app-header></app-header>
    <div class="row">
      <div class="col-8">
        <app-services [category]="urlPath"></app-services>
      </div>
      <div class="col-4">
        <app-form></app-form>
      </div>
    </div>
  `,
  styleUrls: []
})
export class HomePageComponent implements OnInit {
  urlPath: string;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.urlPath = this._getCurrentUrlPath(this._router);
  }

  _getCurrentUrlPath(route: Router): string {
    const currentUrl = route.url;
    const currentPath = currentUrl.split('/')[1];

    return currentPath;
  }
}
