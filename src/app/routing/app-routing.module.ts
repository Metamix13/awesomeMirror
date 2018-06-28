import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ConfigPageComponent} from '../config-page/config-page.component';


//ToDo: Default Route festlegen
const routes: Routes = [
  {
    path: 'config',
    component: ConfigPageComponent
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