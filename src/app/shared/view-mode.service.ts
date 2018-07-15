/*
  View Mode Service to change the view Mode of the application. There is only one instance of this class for the whole application.
 */

export class ViewModeService {
  viewMode: boolean; //View mode boolean to show/hide different parts of the application

  constructor() {
    //Init attribute with default value (Always start the application on none-view-mode
    this.viewMode = false;
  }

  /*
    Toggle view mode
   */
  changeViewMode(newMode: boolean) {
    this.viewMode = newMode;
  }

}
