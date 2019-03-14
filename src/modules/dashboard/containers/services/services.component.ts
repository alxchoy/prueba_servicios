import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
          (onEdit)="editService(service)"
        >
        </app-card>
      </div>
    </div>
  `
})
export class ServicesComponent implements OnInit {
  @Input() category: string;
  @Output() onEditService = new EventEmitter();
  listServices: Array<Object>;
  dataSource$ = from([data]);

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this._preLoadDataFirstTime();

    const selector = this._indetifyCategorySelector(this.category);
    this._store.select(selector).subscribe(res => (this.listServices = res));
  }

  deleteService(id) {
    this._store.dispatch(new servicesActions.DeleteServices(id));
  }

  editService(service) {
    this.onEditService.emit(service);
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
