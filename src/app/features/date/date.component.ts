import { Component, OnInit } from '@angular/core';
import {FormatService} from '../../shared/format.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor(public formatService:FormatService) {
    setInterval(() => this.setDate(),1000)
  }
  date:number;

  ngOnInit() {
  }

  setDate(){
    this.date = Date.now();
  }

}
