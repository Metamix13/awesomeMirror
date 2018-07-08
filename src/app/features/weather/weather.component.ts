import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../shared/weather.service';
import { Subscription } from 'rxjs/Subscription';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {

  lat: string;
  lng: string;
  weatherData: {};

  constructor(public weatherService:WeatherService) {
    this.lat = '52.269760';
    this.lng = '10.515661';
    this.getForecast();
  }


  //ToDo: Durch Config-Page setzen
  ngOnInit() {
  }

  getForecast() {
    //this.weatherData = new Observable<object>()
    this.weatherService.currentForecast(this.lat, this.lng).subscribe(data => this.weatherData = data.json());

    //this.weatherService.currentForecast(this.lat, this.lng)
    //  .subscribe(data => this.weatherData = data);
  }

  logWeather(){
    console.log(this.weatherData);
  }
}
