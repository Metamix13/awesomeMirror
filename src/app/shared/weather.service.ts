import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
//JSONP anstatt Angular http wg. CORS Probleme
import {Jsonp} from '@angular/http';
import {ConfigService} from "./config.service";

@Injectable()
export class WeatherService {

  readonly ROOT_URL = 'https://api.darksky.net/forecast/';
  API_Key:string;

  weatherData: object;
  lat: string;
  lng: string;

  constructor(private jsonp: Jsonp, private configService:ConfigService) {
    this.API_Key = this.configService.darkSkyAPIKey;
    this.lat = '52.269760';
    this.lng = '10.515661';
    this.getData(this.lat, this.lng);
    //Get new Data every hour
    setInterval(() => this.getData(this.lat, this.lng),1000 * 60 * 60);
  }

  getCurrentForecastFromDarkSky(lat: string, lng: string): Observable<any> {
    this.API_Key = this.configService.darkSkyAPIKey;
    return this.jsonp.request(this.ROOT_URL + this.API_Key + '/' + lat + ',' + lng + '?lang=de&units=si&callback=JSONP_CALLBACK');
  }

  getData(lat: string, lng: string){
    this.getCurrentForecastFromDarkSky(lat,lng).subscribe(data => this.weatherData = data.json());
  }

}
