export class FormatService{

  formatTime: string;
  posTimeFormats: string[];
  formatSec: string;
  posSecTimeFormats: string[];
  showSecSeperate:boolean;
  formatDate: string;
  posDateFormats: string[];
  clockFontSize: number;
  dateFontSize: number;

  constructor(){
    this.showSecSeperate = true;
    this.formatTime = 'hh:mm';
    this.formatSec = ':ss';
    this.formatDate = 'fullDate';
    this.posTimeFormats = ['h','hh','H','HH','m','mm','s','ss','h:mm','hh:mm','hh:mm:ss'];
    this.posSecTimeFormats = [':ss',':s'];
    this.posDateFormats = ['shortDate','mediumDate','longDate','fullDate'];
    this.clockFontSize = 4.5;
    this.dateFontSize = 2;
  }
}
