import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ConfigPageComponent} from '../config-page/config-page.component';
import {AboutPageComponent} from '../about-page/about-page.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

// Routes for the whole App
const routes: Routes = [
  {
    path: 'config',
    component: ConfigPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: false} //<-- debugging purpose only
    ),
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
