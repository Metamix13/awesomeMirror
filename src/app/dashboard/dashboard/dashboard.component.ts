import {Component, OnInit} from '@angular/core';
import {Feature} from '../shared/feature.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //List of all available Features on dashboard
  featureList : Feature[] = [
    new Feature('clock','This is a simple clock', false)
  ];

  constructor() { }

  ngOnInit() {
  }

}
