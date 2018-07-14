import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../shared/news.service';
import {News} from '../../shared/news.model';
import {FormatService} from "../../shared/format.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  index: number; //Index for iterating News array
  interval: number; //Hold the interval level
  actNews: News; //Hold the actNews that will be rendered

  constructor(public newsService: NewsService, public formatService: FormatService) {
    //Init attributes with default values
    this.index = 0;
    this.interval = 30;
    this.actNews = new News();
    //Subscribe to newsService and call startInterval() by getting observable
    this.newsService.getCurrentNewsFromNewsAPI(this.newsService.country).subscribe(obs => this.startInterval());
  }

  ngOnInit() {

  }

  /*
    Start interval for iterating over newsService News array
   */
  startInterval() {
    this.increaseInterval();
    setInterval(() => this.increaseInterval(), 1000 * this.interval);
  }

  /*
    Increase and reset index. Set actNews from newsService News array
   */
  increaseInterval() {
    if (this.index >= 20) {
      this.index = 0;
    } else {
      // Explicit declaration caused by client problems. (On MacOSX with Safari)
      this.actNews.title = this.newsService.news[this.index].title;
      this.actNews.description = this.newsService.news[this.index].description;
      this.actNews.source = this.newsService.news[this.index].source;
      this.actNews.urlToImage = this.newsService.news[this.index].urlToImage;
      this.actNews.publishedAt = this.newsService.news[this.index].publishedAt;
      this.index++;

    }

  }


}
