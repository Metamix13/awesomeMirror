import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../shared/config.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(public configService: ConfigService) {
  }

  ngOnInit() {
  }

}
