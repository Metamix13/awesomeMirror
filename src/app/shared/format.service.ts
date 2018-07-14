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
  newsFontSize: number;
  newsInterval: number;

  constructor(){
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
