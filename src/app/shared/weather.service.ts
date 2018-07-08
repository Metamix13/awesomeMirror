import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
//JSONP anstatt Angular http wg. CORS Probleme
import {Jsonp} from '@angular/http';

@Injectable()
export class WeatherService {

  readonly ROOT_URL = 'https://api.darksky.net/forecast/ec64c27b79a3ec0e658131bf59e28fff/';

  constructor(private jsonp: Jsonp) { }

  currentForecast(lat: string, lng: string): Observable<any> {
    return this.jsonp.request(this.ROOT_URL + lat + ',' + lng + '?lang=de&units=si&callback=JSONP_CALLBACK');
  }
}
