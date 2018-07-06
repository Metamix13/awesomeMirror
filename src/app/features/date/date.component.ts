import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor() {
    setInterval(() => this.setDate(),1000)
  }
  date:number;

  ngOnInit() {
  }

  setDate(){
    this.date = Date.now();
  }

}
