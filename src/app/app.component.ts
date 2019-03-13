import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/state';
import { AddServices } from '../store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba';

  constructor(private _store: Store<AppState>) {
    const a = this._store.select('services');
    a.subscribe(res => console.log(res));
  }

  callToAction() {
    const obj = {
      id: 1,
      title: 'prueba',
      description: 'bla bla bla'
    };
    this._store.dispatch(new AddServices(obj));
  }
}
