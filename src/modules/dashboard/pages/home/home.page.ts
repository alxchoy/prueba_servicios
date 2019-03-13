import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Store } from '@ngrx/store';

import data from '../../../../shared/data';
import { AppState } from '../../../../store/state';

@Component({
  selector: 'app-home-page',
  template: `
    <div>
      <app-header></app-header>
      <app-services></app-services>
    </div>
  `,
  styleUrls: []
})
export class HomePageComponent {
  dataSource$ = from([data]);
  services: any;

  constructor(private _store: Store<AppState>) {
    this.dataSource$.subscribe(res => console.log(res));
    this.services = _store.select('services');
    console.log(this.services);
  }
}
