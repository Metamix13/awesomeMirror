/*
  Feature Class for every feature of this application.
    Name: Name of the feature
    Description: Additional Information
    Shown: Boolean value if the features is currently on the dashboard
    xPos: x-coordinate for Dashboard Layout features
    yPos: y-coordinate for Dashboard Layout features
 */
export class Feature {
  public name: string;
  public description: string;
  public shown: boolean;
  public xPos: number;
  public yPos: number;

  constructor(name: string, description: string, shown: boolean) {
    //Init attributes with constructor parameters and default values
    this.name = name;
    this.description = description;
    this.shown = shown;
    this.xPos = 0;
    this.yPos = 0;
  }
}
