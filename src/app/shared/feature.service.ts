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
      new Feature('date', 'This is a date plugin', false),
      new Feature('weather','This is a weather plugin', false),
      new Feature('weather-forecast-hourly','This is a weather forecast (hourly) plugin', false)

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
          feature.xPos = 10;
          feature.yPos = 20;
          break;
        case "date":
          feature.xPos = 10;
          feature.yPos = 220;
          break;
        case "weather":
          feature.xPos = 900;
          feature.yPos = 20;
          break;
        case "weather-forecast-hourly":
          feature.xPos = 500;
          feature.yPos = 600;
          break;
      }



    });
  }

}
