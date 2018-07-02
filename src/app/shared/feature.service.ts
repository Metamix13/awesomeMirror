import { Injectable } from '@angular/core';
import {Feature} from './feature.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';

@Injectable()
export class FeatureService {

  //List of all available Features
  featureList : Feature[];
  constructor() {
    this.featureList = [
      new Feature('clock','This is a simple clock', false),
      new Feature('exampleFeature','This is just an example', false)
    ];
    this.resizeFeatures();
  }

  getFeatures(){
    return Observable.of(this.featureList);
  }

  /*
    Resize Elements of featureList.
   */
  resizeFeatures(){
    _.forEach(this.featureList, feature => {
      switch(feature.name){
        case "clock":
          feature.xPos = 900;
          feature.yPos = 20;
          break;
        case "exampleFeature":
          feature.xPos = 900;
          feature.yPos = 300;
          break;
      }



    });
  }

}
