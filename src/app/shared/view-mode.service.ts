export class ViewModeService {
  viewMode: boolean;

  constructor() {
    this.viewMode = false;
  }

  changeViewMode(newMode: boolean){
    this.viewMode = newMode;
  }

}
