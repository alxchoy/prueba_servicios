import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceItem } from '../../../../shared/model';

@Component({
  selector: 'app-home-page',
  template: `
    <app-header></app-header>
    <div class="row">
      <div class="col-8">
        <app-services [category]="urlPath" (onEditService)="sendToEditService($event)"> </app-services>
      </div>
      <div class="col-4">
        <app-form [serviceEdit]="serviceToEdit"></app-form>
      </div>
    </div>
  `,
  styleUrls: []
})
export class HomePageComponent implements OnInit {
  urlPath: string;
  serviceToEdit: ServiceItem;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.urlPath = this._getCurrentUrlPath(this._router);
  }

  sendToEditService(e) {
    this.serviceToEdit = e;
  }

  _getCurrentUrlPath(route: Router): string {
    const currentUrl = route.url;
    const currentPath = currentUrl.split('/')[1];

    return currentPath;
  }
}
