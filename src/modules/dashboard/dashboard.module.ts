import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRouteModule } from './dashboard.route';

import { CardComponent } from './components/card/card.component';
import { ServicesComponent } from './containers/services/services.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home/home.page';
// import { FormComponent } from './containers/form/form.component';

@NgModule({
  declarations: [HomePageComponent, ServicesComponent, CardComponent, HeaderComponent],
  exports: [ServicesComponent],
  imports: [CommonModule, DashboardRouteModule]
})
export class DashboardModule {}
