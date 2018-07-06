import {Feature} from './feature.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';

export class FeatureService {

  //List of all available Features
  featureList : Feature[];
  constructor() {
    this.featureList = [
      new Feature('clock','This is a simple clock', false),
      new Feature('weather','This is a weather plugin', false)
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
        case "weather":
          feature.xPos = 900;
          feature.yPos = 300;
          break;
      }



    });
  }

}
