import { Component, OnInit } from '@angular/core';
import {FormatService} from '../../shared/format.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: number;

  constructor(public formatService:FormatService) {
    setInterval(() => this.setTime(),1000)
  }

  ngOnInit() {

  }

  setTime(){
    this.time = Date.now();
  }

}
