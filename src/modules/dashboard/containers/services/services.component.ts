import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Store } from '@ngrx/store';

import data from '../../../../shared/data';
import { AppState } from '../../../../store/state';

@Component({
  selector: 'app-services',
  template: `
    <div class="services">
      <app-card *ngFor="let card of (dataSource$ | async)" [title]="card.title" [description]="card.description">
      </app-card>
    </div>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @Input() listByCategory: Array<Object>;
  dataSource$ = from([data]);
  services: any;

  constructor(private _store: Store<AppState>) {
    this.dataSource$.subscribe(res => console.log(res));
    this.services = _store.select('services');
    console.log(this.services);
  }
}
