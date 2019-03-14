import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules
import { DashboardRouteModule } from './dashboard.route';

// components
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

// containers
import { ServicesComponent } from './containers/services/services.component';
import { FormComponent } from './containers/form/form.component';
import { HomePageComponent } from './pages/home/home.page';

// services
import { FormServices } from '../../services/forms';

@NgModule({
  declarations: [HomePageComponent, ServicesComponent, CardComponent, HeaderComponent, FormComponent],
  exports: [ServicesComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DashboardRouteModule],
  providers: [FormServices]
})
export class DashboardModule {}
