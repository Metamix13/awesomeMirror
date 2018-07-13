import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../shared/news.service';
import {FormatService} from "../../../shared/format.service";

@Component({
  selector: 'app-news-conf',
  templateUrl: './news-conf.component.html',
  styleUrls: ['./news-conf.component.css']
})
export class NewsConfComponent implements OnInit {

  constructor(public newsService:NewsService, public formatService:FormatService) { }

  ngOnInit() {
  }

}
