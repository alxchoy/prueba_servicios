import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../store/state';
import { AddServices } from '../../../../store/actions';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="card__footer">
        <ul>
          <li><button>Editar</button></li>
          <li><button>Eliminar</button></li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string;
  @Input() description: string;

  constructor(private _store: Store<AppState>) {}

  callToAction() {
    // this._store.dispatch(new AddServices());
  }
}
