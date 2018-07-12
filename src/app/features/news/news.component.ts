import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../shared/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  index: number;
  actNews: object;

  constructor(public newsService:NewsService) {
    this.index = 0;
    //setInterval(() => this.increaseInterval(),1000 * 60);

  }

  ngOnInit() {
    //this.newsService.getCurrentNewsFromNewsAPI(this.newsService.country).subscribe(data => console.log(data[0]));
  }

  increaseInterval(){
    if(this.index >= 20){
      this.index = 0;
    }else{
      this.index++;
      this.actNews = this.newsService.news[this.index];

    }

  }


}
