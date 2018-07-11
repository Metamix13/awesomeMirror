import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
//JSONP anstatt Angular http wg. CORS Probleme
import {Jsonp} from '@angular/http';

@Injectable()
export class WeatherService {

  readonly ROOT_URL = 'https://api.darksky.net/forecast/ec64c27b79a3ec0e658131bf59e28fff/';

  weatherData: object;
  lat: string;
  lng: string;

  constructor(private jsonp: Jsonp) {
    this.getData();
  }

  getCurrentForecastFromDarkSky(lat: string, lng: string): Observable<any> {
    return this.jsonp.request(this.ROOT_URL + lat + ',' + lng + '?lang=de&units=si&callback=JSONP_CALLBACK');
  }

  getData(){
    this.getCurrentForecastFromDarkSky('52.269760','10.515661').subscribe(data => this.weatherData = data.json());
  }

}
