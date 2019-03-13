import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './pages/home/home.page';

const dashboardRoutes: Routes = [
  {
    path: 'all',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRouteModule {}
