import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRouteModule } from './app.route';
import { DashboardModule } from '../modules/dashboard/dashboard.module';

import { AppComponent } from './app.component';

import { reducer } from '../store/reducer';
import { servicesConstants } from '../shared/constants';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouteModule,
    DashboardModule,
    StoreModule.forRoot({
      [servicesConstants.propertyNameServicesState]: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
