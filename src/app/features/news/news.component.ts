import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../shared/news.service';
import {News} from '../../shared/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  index: number;
  interval: number;
  actNews: News;

  constructor(public newsService:NewsService) {
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
      this.actNews = this.newsService.news[this.index];
      this.index++;

    }

  }


}
