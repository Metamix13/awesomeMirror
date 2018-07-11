import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../../shared/weather.service";

@Component({
  selector: 'app-weather-conf',
  templateUrl: './weather-conf.component.html',
  styleUrls: ['./weather-conf.component.css']
})
export class WeatherConfComponent implements OnInit {

  constructor(public weatherService: WeatherService) { }


  ngOnInit() {
  }

  onSubmit(){
}

}
