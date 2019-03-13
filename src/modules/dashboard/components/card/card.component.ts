import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../store/state';
import { AddServices } from '../../../../store/actions';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
      </div>
      <div class="card-footer">
        <a href="#" class="card-link">Editar</a>
        <a href="#" class="card-link">Eliminar</a>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() title: string;
  @Input() description: string;

  constructor(private _store: Store<AppState>) {}

  callToAction() {
    // this._store.dispatch(new AddServices());
  }
}
