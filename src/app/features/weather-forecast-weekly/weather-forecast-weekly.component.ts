import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../shared/weather.service';

@Component({
  selector: 'app-weather-forecast-weekly',
  templateUrl: './weather-forecast-weekly.component.html',
  styleUrls: ['./weather-forecast-weekly.component.css']
})
export class WeatherForecastWeeklyComponent implements OnInit {

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit() {
  }


}
