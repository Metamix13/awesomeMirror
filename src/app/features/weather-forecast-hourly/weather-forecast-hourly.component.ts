import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../shared/weather.service';

@Component({
  selector: 'app-weather-forecast-hourly',
  templateUrl: './weather-forecast-hourly.component.html',
  styleUrls: ['./weather-forecast-hourly.component.css']
})
export class WeatherForecastHourlyComponent implements OnInit {

  lat: string;
  lng: string;
  weatherData: object[];


  constructor(public weatherService:WeatherService) {
    this.lat = '52.269760';
    this.lng = '10.515661';
    this.getForecast();
  }

  ngOnInit() {
  }

  getForecast() {
    this.weatherService.currentForecast(this.lat, this.lng).subscribe(data => this.weatherData = data.json().hourly.data);
  }

}
