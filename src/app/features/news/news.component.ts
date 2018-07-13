import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../shared/news.service';
import {News} from '../../shared/news.model';
import {FormatService} from "../../shared/format.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  index: number;
  interval: number;
  actNews: News;

  constructor(public newsService:NewsService, public formatService:FormatService) {
    this.index = 0;
    this.interval = 30;
    this.actNews = new News();
    this.newsService.getCurrentNewsFromNewsAPI(this.newsService.country).subscribe(obs => this.startInterval());
  }

  ngOnInit() {

  }

  startInterval(){
    this.increaseInterval();
    setInterval(() => this.increaseInterval(),1000 * this.interval);
  }

  increaseInterval(){
    if(this.index >= 20){
      this.index = 0;
    }else{
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
