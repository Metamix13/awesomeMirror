import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../shared/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {

  lat: string;
  lng: string;

  constructor(public weatherService:WeatherService) { }

  ngOnInit() {
    this.lat = "40.73";
    this.lng = "-73.93";
  }

  getForecast() {
    this.weatherService.currentForecast(this.lat, this.lng)
      .subscribe(data => console.log(data));
  }
}
