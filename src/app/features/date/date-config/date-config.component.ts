import { Component, OnInit } from '@angular/core';
import {FormatService} from '../../../shared/format.service';

@Component({
  selector: 'app-date-config',
  templateUrl: './date-config.component.html',
  styleUrls: ['./date-config.component.css']
})
export class DateConfigComponent implements OnInit {

  constructor(public formatService:FormatService) { }

  ngOnInit() {
  }

}
