import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ConfigPageComponent } from './config-page/config-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigPageComponent,
    NavBarComponent,
    AboutPageComponent,
    ContactPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
