import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Store } from '@ngrx/store';

import data from '../../../../shared/data';
import { servicesConstants } from '../../../../shared/constants';
import { AppState } from '../../../../store/state';
import { servicesActions } from '../../../../store/index';
import { servicesSelectors } from '../../../../store/index';

@Component({
  selector: 'app-services',
  template: `
    <div class="services">
      <div class="row">
        <app-card
          class="col-4"
          *ngFor="let service of listServices"
          [title]="service.title"
          [description]="service.description"
          (onDelete)="deleteService(service.id)"
          (onEdit)="editService(service.id)"
        >
        </app-card>
      </div>
    </div>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() category: string;
  listServices: Array<Object>;
  dataSource$ = from([data]);

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this._preLoadDataFirstTime();
    const selector = this._indetifyCategorySelector(this.category);
    this._store.select(selector).subscribe(res => (this.listServices = res));
  }

  deleteService(id) {
    console.log(`delete service ${id}`);
  }

  editService(id) {
    console.log(`edit service ${id}`);
  }

  _preLoadDataFirstTime() {
    this._store.select(servicesConstants.propertyNameServicesState).subscribe(res => {
      res.length === 0 && this._getSimulateDataService();
    });
  }

  _getSimulateDataService() {
    this.dataSource$.subscribe(res => {
      this._store.dispatch(new servicesActions.AddMultiplesServices(res));
    });
  }

  _indetifyCategorySelector(urlPath: string): any {
    return urlPath === servicesConstants.urlPathNameToAllServices
      ? servicesConstants.propertyNameServicesState
      : servicesSelectors.getServicesByCategory(this.category);
  }
}
