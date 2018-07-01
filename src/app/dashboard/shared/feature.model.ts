export class Feature {
  public name: string;
  public description: string;
  public shown: boolean;

  constructor(name: string, description: string){
    this.name = name;
    this.description = description;
    this.shown = false;
  }
}
