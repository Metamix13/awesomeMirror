import {Component, OnInit} from '@angular/core';
import {FormatService} from '../../../shared/format.service';

@Component({
  selector: 'app-date-conf',
  templateUrl: './date-conf.component.html',
  styleUrls: ['./date-conf.component.css']
})
export class DateConfComponent implements OnInit {

  constructor(public formatService: FormatService) {
  }

  ngOnInit() {
  }

}
