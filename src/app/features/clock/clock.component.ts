import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  constructor() {
    setInterval(() => this.setTime(),1000)
  }
  time: number;

  ngOnInit() {
  }

  setTime(){
    this.time = Date.now();
  }

}
