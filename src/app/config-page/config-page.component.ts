import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../shared/config.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  newsAPIKeyShown: boolean; // Show or hide API Key Input value
  darkSkyAPIKeyShown: boolean; // Show or hide API Key Input value

  constructor(public configService: ConfigService, private translateService: TranslateService) {
    // Init attributes
    this.newsAPIKeyShown = false;
    this.darkSkyAPIKeyShown = false;
  }

  ngOnInit() {
  }

  /*
    Change application language by calling the translateService
   */
  useLanguage(language: string) {
    this.translateService.use(language);
  }


}
