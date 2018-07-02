import {Component, Input, OnInit} from '@angular/core';
import {FeatureService} from '../shared/feature.service';
import {Feature} from '../shared/feature.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  localFeatureList: Feature[];
  constructor(private featureService: FeatureService) { }

  ngOnInit() {
    this.featureService.getFeatures().subscribe(features => {
      this.localFeatureList = features;
    });



  }

  }

