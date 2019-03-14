import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';

import { FormServices } from '../../../../services/forms';
import { ServiceItem } from '../../../../shared/model';

import { servicesConstants } from '../../../../shared/constants';
import { AppState } from '../../../../store/state';
import { servicesActions } from '../../../../store/index';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() serviceEdit: ServiceItem;
  servicesFrm;
  submitted: boolean;
  categoryList: string[];
  _servicesList: ServiceItem[];

  constructor(private _store: Store<AppState>, private _formServices: FormServices) {}

  ngOnChanges(changes: SimpleChanges) {
    this.serviceEdit = changes.serviceEdit.currentValue;
    this.serviceEdit && this.servicesFrm.patchValue(this.serviceEdit);
  }

  ngOnInit() {
    this.submitted = false;
    this.categoryList = ['salud', 'hogar', 'autos'];
    this.servicesFrm = this._formServices.serviceForm();

    this._getAllServices();
  }

  get form() {
    return this.servicesFrm.controls;
  }

  submitForm() {
    this.submitted = true;

    if (this.servicesFrm.invalid) {
      return void 0;
    }

    Object.keys(this.serviceEdit || {}).length > 0 ? this._editService() : this._createService();

    this._clearForm();
  }

  cancelForm() {
    this._clearForm();
  }

  _getAllServices() {
    this._store.select(servicesConstants.propertyNameServicesState).subscribe(res => (this._servicesList = res));
  }

  _createService() {
    const lastService = this._servicesList[this._servicesList.length - 1];
    const newId = lastService.id + 1;
    this._store.dispatch(new servicesActions.AddServices({ ...this.servicesFrm.value, id: newId }));
  }

  _editService() {
    this._store.dispatch(new servicesActions.EditServices({ ...this.servicesFrm.value, id: this.serviceEdit.id }));
  }

  _clearForm() {
    this.servicesFrm.reset();
    this.servicesFrm.controls['category'].setValue('salud');
    this.submitted = false;
  }
}
