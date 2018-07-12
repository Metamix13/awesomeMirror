export class FormatService{

  formatTime: string;
  posTimeFormats: string[];
  formatSec: string;
  posSecTimeFormats: string[];
  showSecSeperate:boolean;

  constructor(){
    this.showSecSeperate = true;
    this.formatTime = 'h:mm';
    this.formatSec = ':ss';
    this.posTimeFormats = ['h','hh','H','HH','m','mm','s','ss','h:mm','hh:mm','hh:mm:ss'];
    this.posSecTimeFormats = [':ss',':s'];
  }
}
