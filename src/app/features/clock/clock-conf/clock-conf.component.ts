import { Component, OnInit } from '@angular/core';
import {FormatService} from '../../../shared/format.service';

@Component({
  selector: 'app-clock-conf',
  templateUrl: './clock-conf.component.html',
  styleUrls: ['./clock-conf.component.css']
})
export class ClockConfComponent implements OnInit {

  constructor(public formatService:FormatService) { }

  ngOnInit() {
  }

}
