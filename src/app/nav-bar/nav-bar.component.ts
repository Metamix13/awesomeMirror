import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() viewModePass: boolean;
  @Output() isViewModeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  onViewModeChange(mode:boolean){
    this.isViewModeChanged.emit(mode);
  }


}
