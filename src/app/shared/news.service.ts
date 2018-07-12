import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NewsService {
  readonly ROOT_URL = 'https://newsapi.org/v2/top-headlines?';
  readonly API_KEY = 'd8f91ac4e70f4825b767c6d9a9f52337';

  country: string;
  news: object;

  constructor(private http:HttpClient){
    this.country = 'de';
    this.getData(this.country);
    //Get new Data every hour
    setInterval(() => this.getData(this.country),1000 * 60 * 60);
  }

  getCurrentNewsFromNewsAPI(country:string):Observable<any>{
    return this.http.get(this.ROOT_URL + 'country=' + country + '&apiKey=' + this.API_KEY);
  }

  getData(country:string){
    this.getCurrentNewsFromNewsAPI(country).subscribe(data => this.news = data);
  }

}
