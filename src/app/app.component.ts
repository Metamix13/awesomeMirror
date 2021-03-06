import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awesome Mirror';

  constructor(private translateService: TranslateService) {
    //Set default language of this application
    this.translateService.setDefaultLang('en');

  }


}
