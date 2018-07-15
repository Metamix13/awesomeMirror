export class FormatService{

  formatTime: string; //Format for Time
  posTimeFormats: string[]; //Possible Time Formats
  formatSec: string; //Format for Sec Part
  posSecTimeFormats: string[]; //Possible Sec Time Formats
  showSecSeperate:boolean; //Boolean to hide/show Sec Part
  formatDate: string; //Format for Date
  posDateFormats: string[]; //Possible Date Formats
  clockFontSize: number; //Clock Font Size
  dateFontSize: number; //Date Font Size
  newsFontSize: number; //News Font Size
  newsInterval: number; //News interval for iterating News array

  constructor(){
    //Init attributes with default values
    this.showSecSeperate = true;
    this.formatTime = 'HH:mm';
    this.formatSec = ':ss';
    this.formatDate = 'fullDate';
    this.posTimeFormats = ['h','hh','H','HH','m','mm','s','ss','h:mm','hh:mm','hh:mm:ss','H:mm','HH:mm','HH:mm:ss'];
    this.posSecTimeFormats = [':ss',':s'];
    this.posDateFormats = ['shortDate','mediumDate','longDate','fullDate'];
    this.clockFontSize = 4.5;
    this.dateFontSize = 2;
    this.newsFontSize = 1;
    this.newsInterval = 30;
  }
}
