import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../shared/config.service";

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  newsAPIKeyShown:boolean;
  darkSkyAPIKeyShown:boolean;

  constructor(public configService:ConfigService) {
    this.newsAPIKeyShown = false;
    this.darkSkyAPIKeyShown = false;
  }

  ngOnInit() {
  }



}
