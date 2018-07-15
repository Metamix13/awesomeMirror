import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
//JSONP instead of angular http because of CORS problems on darkSky API
import {Jsonp} from '@angular/http';
import {ConfigService} from "./config.service";

@Injectable()
export class WeatherService {

  readonly ROOT_URL = 'https://api.darksky.net/forecast/'; //URL for API Call
  API_Key: string; //API Key configurable over Config Page

  weatherData: object; //Weather Data to hold data from API
  lat: string; //Latitude parameter for API Call
  lng: string; //Longitude parameter for API Call

  constructor(private jsonp: Jsonp, private configService: ConfigService) {
    //Init attributes with default values or values from other services
    this.API_Key = this.configService.darkSkyAPIKey;
    this.lat = '52.269760';
    this.lng = '10.515661';
    this.getData(this.lat, this.lng);
    //Get new Data every hour
    setInterval(() => this.getData(this.lat, this.lng), 1000 * 60 * 60);
  }

  /*
    Get current forecast from dark sky API and return Observable
   */
  getCurrentForecastFromDarkSky(lat: string, lng: string): Observable<any> {
    //Get API Key from Config Page in case something has changed
    this.API_Key = this.configService.darkSkyAPIKey;
    return this.jsonp.request(this.ROOT_URL + this.API_Key + '/' + lat + ',' + lng + '?lang=de&units=si&callback=JSONP_CALLBACK');
  }

  /*
    Function to fill weather object with data from observable
   */
  getData(lat: string, lng: string) {
    this.getCurrentForecastFromDarkSky(lat, lng).subscribe(data => this.weatherData = data.json());
  }

}
