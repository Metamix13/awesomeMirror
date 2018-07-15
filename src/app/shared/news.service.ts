import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {News} from './news.model';
import {ConfigService} from "./config.service";

@Injectable()
export class NewsService {
  readonly ROOT_URL = 'https://newsapi.org/v2/top-headlines?'; //URL for API Call
  API_KEY: string; //API Key configurable over Config Page

  country: string; //News Country
  posCountries: string[]; //List of possible countries
  news: News[]; //Array with objects from type News

  constructor(private http: HttpClient, private configService: ConfigService) {
    //Init attributes with default values or values from other services
    this.API_KEY = this.configService.newsAPIKey;
    this.country = 'de';
    this.posCountries = ['us', 'de'];
    this.getData(this.country);

    //Get new Data every hour
    setInterval(() => this.getData(this.country), 1000 * 60 * 60);
  }

  /*
    Gets current news from News API and return Observable
   */
  getCurrentNewsFromNewsAPI(country: string): Observable<any> {
    //Get API Key from Config Page in case something has changed
    this.API_KEY = this.configService.newsAPIKey;
    return this.http.get(this.ROOT_URL + 'country=' + country + '&apiKey=' + this.API_KEY);
  }

  /*
    Function to fill news array with data from observable
   */
  getData(country: string) {
    this.getCurrentNewsFromNewsAPI(country).subscribe(data => this.news = data.articles);
  }

}
