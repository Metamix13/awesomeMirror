export class Feature {
  public name: string;
  public description: string;
  public shown: boolean;
  public xPos: number;
  public yPos: number;

  constructor(name: string, description: string, shown: boolean){
    this.name = name;
    this.description = description;
    this.shown = shown;
    this.xPos = 0;
    this.yPos = 0;
  }
}
