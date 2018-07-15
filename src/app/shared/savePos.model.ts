/*
  SavePos class to support layout function on dashboard
    Name: Feature Name
    xPos: x-coordinate from feature card
    yPos: y-coordinate from feature card
 */

export class SavePos {
  public name: string;
  public xPos: number;
  public yPos: number;

  constructor(name: string) {
    //Init attributes with constructor parameter or default values
    this.name = name;
    this.xPos = 0;
    this.yPos = 0;
  }
}
