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
  weatherData: {
    data: {}
  };

  constructor(public weatherService:WeatherService) { }


  //ToDo: Durch Config-Page setzen
  ngOnInit() {
    this.lat = '52.269760';
    this.lng = '10.515661';
    this.getForecast();
  }

  getForecast() {
    this.weatherService.currentForecast(this.lat, this.lng)
      .subscribe(data => this.weatherData = data);
  }

  logWeather(){
    console.log(this.weatherData);
  }
}
