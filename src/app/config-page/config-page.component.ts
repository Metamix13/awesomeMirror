import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../shared/config.service";

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  constructor(public configService:ConfigService) { }

  ngOnInit() {
  }



}
