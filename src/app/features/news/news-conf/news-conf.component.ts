import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../shared/news.service';

@Component({
  selector: 'app-news-conf',
  templateUrl: './news-conf.component.html',
  styleUrls: ['./news-conf.component.css']
})
export class NewsConfComponent implements OnInit {

  constructor(public newsService:NewsService) { }

  ngOnInit() {
  }

}
