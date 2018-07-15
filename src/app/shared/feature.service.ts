import {Feature} from './feature.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';
import {SavePos} from './savePos.model';

export class FeatureService {

  featureList: Feature[]; //List of all available Features
  savedPositions: SavePos[]; //List of saved positions

  constructor() {
    //Init attributes with default values and set up Feature List
    this.savedPositions = [];
    this.featureList = [
      new Feature('clock', 'This is a simple clock', true),
      new Feature('date', 'This is a date plugin', true),
      new Feature('weather', 'This is a weather plugin', false),
      new Feature('weather-forecast-hourly', 'This is a weather forecast (hourly) plugin', false),
      new Feature('weather-forecast-weekly', 'This is a weather forecast (weekly) plugin', false),
      new Feature('news', 'This is a news plugin', false)
    ];

    //Set default layout for the dashboard
    this.setDefaultPositions();
  }

  /*
    Return observable of the featureList
   */
  getFeatures() {
    return Observable.of(this.featureList);
  }

  /*
    Add Feature to the dashboard by changing the shown attribute
   */
  changeShown(featureName: string, shown: boolean) {
    let index = _.findIndex(this.featureList, ['name', featureName]);
    this.featureList[index].shown = shown;
  }

  /*
    Save custom position layout
   */
  savePosition() {
    this.featureList.forEach((feature) => {
      let index = _.findIndex(this.savedPositions, ['name', feature.name]);
      if (index === -1) {
        this.savedPositions.push({
          name: feature.name,
          xPos: feature.xPos,
          yPos: feature.yPos
        })
      } else {
        this.savedPositions[index].xPos = feature.xPos;
        this.savedPositions[index].yPos = feature.yPos;
      }
    });
  }

  /*
    Arrange Features with saved custom Position
   */
  arrangeWithSavedPositions() {
    _.forEach(this.savedPositions, pos => {
      let index = _.findIndex(this.featureList, ['name', pos.name]);
      if (index !== -1) {
        this.featureList[index].xPos = pos.xPos;
        this.featureList[index].yPos = pos.yPos;
      }
    });
  }

  /*
    Arrange Features by default Position
   */
  setDefaultPositions() {
    _.forEach(this.featureList, feature => {
      switch (feature.name) {
        case "clock":
          feature.xPos = 10;
          feature.yPos = 20;
          break;
        case "date":
          feature.xPos = 10;
          feature.yPos = 420;
          break;
        case "weather":
          feature.xPos = 900;
          feature.yPos = 20;
          break;
        case "weather-forecast-hourly":
          feature.xPos = 600;
          feature.yPos = 600;
          break;
        case "weather-forecast-weekly":
          feature.xPos = -10;
          feature.yPos = 1000;
          break;
        case "news":
          feature.xPos = 10;
          feature.yPos = 700;
          break;
      }


    });
  }

}
