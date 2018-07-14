import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../shared/config.service";
import {Member} from "../shared/member.model";

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  newsAPIKeyShown:boolean;
  darkSkyAPIKeyShown:boolean;
  inputMember:Member;

  constructor(public configService:ConfigService) {
    this.newsAPIKeyShown = false;
    this.darkSkyAPIKeyShown = false;
    this.inputMember = new Member('', '', '');

  }

  ngOnInit() {
  }



}
