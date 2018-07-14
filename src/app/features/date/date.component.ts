import {Component, OnInit} from '@angular/core';
import {FormatService} from '../../shared/format.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  date: number; // Hold date Data

  constructor(public formatService: FormatService) {
    //Get initial date
    this.setDate();
    //Set interval for date update 60000ms = 1 min
    setInterval(() => this.setDate(), 1000 * 60)
  }

  ngOnInit() {
  }

  /*
  Update date from Date Class
 */
  setDate() {
    this.date = Date.now();
  }

}
