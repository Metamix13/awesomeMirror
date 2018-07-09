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
import {ClockComponent} from './features/clock/clock.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FeatureService} from './shared/feature.service';
import {AngularDraggableModule} from 'angular2-draggable';
import { WeatherComponent } from './features/weather/weather.component';
import {ViewModeService} from './shared/view-mode.service';
import { DateComponent } from './features/date/date.component';
import {WeatherService} from './shared/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {JsonpModule} from '@angular/http';
import { WeatherForecastHourlyComponent } from './features/weather-forecast-hourly/weather-forecast-hourly.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigPageComponent,
    NavBarComponent,
    AboutPageComponent,
    ContactPageComponent,
    DashboardComponent,
    ClockComponent,
    WeatherComponent,
    DateComponent,
    WeatherForecastHourlyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    AngularDraggableModule,
    HttpClientModule,
    JsonpModule
  ],
  providers: [
    FeatureService,
    ViewModeService,
  WeatherService],
    bootstrap: [AppComponent]
})
export class AppModule { }
