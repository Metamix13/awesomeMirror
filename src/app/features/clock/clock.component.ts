import {Component, OnInit} from '@angular/core';
import {FormatService} from '../../shared/format.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: number; //Hold time data

  constructor(public formatService: FormatService) {
    //Set interval for clock update 1000ms = 1 sec
    setInterval(() => this.setTime(), 1000)
  }

  ngOnInit() {

  }

  /*
    Update clock from Date Class
   */
  setTime() {
    this.time = Date.now();
  }

}
