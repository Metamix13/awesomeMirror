import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../shared/weather.service';

@Component({
  selector: 'app-weather-forecast-hourly',
  templateUrl: './weather-forecast-hourly.component.html',
  styleUrls: ['./weather-forecast-hourly.component.css']
})
export class WeatherForecastHourlyComponent implements OnInit {

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit() {
  }


}
