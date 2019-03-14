import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Store } from '@ngrx/store';

import { FormServices } from '../../../../services/forms';
import { ServiceItem } from '../../../../shared/model';

import data from '../../../../shared/data';
import { servicesConstants } from '../../../../shared/constants';
import { AppState } from '../../../../store/state';
import { servicesActions } from '../../../../store/index';
import { servicesSelectors } from '../../../../store/index';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  servicesFrm;
  submitted: boolean;
  categoryList: string[];
  servicesList: ServiceItem[];
  defaultValueCategory: string;

  constructor(private _store: Store<AppState>, private _formServices: FormServices) {}

  ngOnInit() {
    this.submitted = false;
    this.categoryList = ['salud', 'hogar', 'autos'];
    this.defaultValueCategory = 'Seleccione';
    this.servicesFrm = this._formServices.serviceForm();

    this.servicesFrm.controls['category'].setValue(this.categoryList[0]);
  }

  get form() {
    return this.servicesFrm.controls;
  }

  submitForm() {
    this.submitted = true;

    if (this.servicesFrm.invalid) {
      return void 0;
    }

    this._setIdToNewService(this.servicesFrm.value);

    // this._store.dispatch(new servicesActions.AddServices());
  }

  _setIdToNewService(serviceObj) {
    this._store.select(servicesConstants.propertyNameServicesState).subscribe(res => {
      const lastService = res[res.length - 1];
      const newId = lastService.id + 1;

      this._store.dispatch(new servicesActions.AddServices({ ...serviceObj, id: newId }));
    });
  }
}
