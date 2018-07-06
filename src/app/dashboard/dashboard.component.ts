import {Component,OnInit} from '@angular/core';
import {FeatureService} from '../shared/feature.service';
import {Feature} from '../shared/feature.model';
import * as _ from 'lodash';
import {ViewModeService} from '../shared/view-mode.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  localFeatureList: Feature[];
  constructor(public featureService: FeatureService, public viewModeService:ViewModeService) { }

  ngOnInit() {
    this.featureService.getFeatures().subscribe(features => {
      this.localFeatureList = features;
    });
  }
  onMoveEnd(feature, event){
    _.find(this.localFeatureList, {name: feature.name}).xPos = event.x;
    _.find(this.localFeatureList, {name: feature.name}).yPos = event.y;
  }

  }

