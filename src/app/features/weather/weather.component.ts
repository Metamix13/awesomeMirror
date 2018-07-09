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
  weatherData: object;

  //ToDo: Durch Config-Page setzen
  constructor(public weatherService:WeatherService) {
    this.lat = '52.269760';
    this.lng = '10.515661';
    this.getForecast();
  }

  ngOnInit() {
  }

  getForecast() {
    this.weatherService.currentForecast(this.lat, this.lng).subscribe(data => this.weatherData = data.json());
  }

  logWeather(){
    console.log(this.weatherData);
  }
}
