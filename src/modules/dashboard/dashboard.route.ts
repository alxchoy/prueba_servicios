import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './pages/home/home.page';

const dashboardRoutes: Routes = [
  { path: 'todos', component: HomePageComponent },
  { path: 'autos', component: HomePageComponent },
  { path: 'salud', component: HomePageComponent },
  { path: 'hogar', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRouteModule {}
