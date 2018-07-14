import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../shared/config.service";
import {Member} from "../shared/member.model";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  newsAPIKeyShown:boolean;
  darkSkyAPIKeyShown:boolean;
  inputMember:Member;

  constructor(public configService:ConfigService, private translateService:TranslateService) {
    this.newsAPIKeyShown = false;
    this.darkSkyAPIKeyShown = false;
    this.inputMember = new Member('', '', '');

  }

  ngOnInit() {
  }

  useLanguage(language:string){
    this.translateService.use(language);
  }



}
