import { Injectable } from '@angular/core';
import {Feature} from './feature.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class FeatureService {

  //List of all available Features
  featureList : Feature[];
  constructor() {
    this.featureList = [
      new Feature('clock','This is a simple clock', false)
    ]
  }

  getFeatures(){
    return Observable.of(this.featureList);
  }

}
