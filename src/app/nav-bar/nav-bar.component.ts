import {Component, OnInit} from '@angular/core';
import {FeatureService} from '../shared/feature.service';
import {ViewModeService} from '../shared/view-mode.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public featureService: FeatureService, public viewModeService:ViewModeService) { }

  ngOnInit() {
  }


}
