import { Component } from '@angular/core';
import {Feature} from './shared/feature.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awesome Mirror';
  viewMode: boolean = false;

  onModeChangeEvent(mode: boolean) {
    this.viewMode = mode;
  }


}
