import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {News} from './news.model';
import {ConfigService} from "./config.service";

@Injectable()
export class NewsService {
  readonly ROOT_URL = 'https://newsapi.org/v2/top-headlines?';
  API_KEY:string;

  country: string;
  posCountries: string[];
  news: News[];

  constructor(private http:HttpClient, private configService:ConfigService){
    this.API_KEY = this.configService.newsAPIKey;
    this.country = 'de';
    this.posCountries = ['us', 'de'];
    this.getData(this.country);
    //Get new Data every hour
    setInterval(() => this.getData(this.country),1000 * 60 * 60);
  }

  getCurrentNewsFromNewsAPI(country:string):Observable<any>{
    this.API_KEY = this.configService.newsAPIKey;
    return this.http.get(this.ROOT_URL + 'country=' + country + '&apiKey=' + this.API_KEY);
  }

  getData(country:string){
    this.getCurrentNewsFromNewsAPI(country).subscribe(data => this.news = data.articles);
  }

}
