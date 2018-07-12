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
    this.lat = '52.269760';
    this.lng = '10.515661';
    this.getData(this.lat, this.lng);
    //Get new Data every hour
    setInterval(() => this.getData(this.lat, this.lng),1000 * 60 * 60);
  }

  getCurrentForecastFromDarkSky(lat: string, lng: string): Observable<any> {
    return this.jsonp.request(this.ROOT_URL + lat + ',' + lng + '?lang=de&units=si&callback=JSONP_CALLBACK');
  }

  getData(lat: string, lng: string){
    this.getCurrentForecastFromDarkSky(lat,lng).subscribe(data => this.weatherData = data.json());
  }

}
