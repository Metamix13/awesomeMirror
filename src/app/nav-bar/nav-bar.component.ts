import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FeatureService} from '../shared/feature.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public featureService: FeatureService) { }

  ngOnInit() {
  }

  @Input() viewModePass: boolean;
  @Output() isViewModeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  onViewModeChange(mode:boolean){
    this.isViewModeChanged.emit(mode);
  }


}
