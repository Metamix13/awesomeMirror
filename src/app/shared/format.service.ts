export class FormatService{

  formatTime: string; //Format for Time
  posTimeFormats: string[]; //Possible Time Formats
  formatSec: string; //Format for Sec Part
  posSecTimeFormats: string[]; //Possible Sec Time Formats
  showSecSeperate:boolean; //Boolean to hide/show Sec Part
  formatDate: string; //Format for Date
  formatDateMonth: string; //Format for Month in Date
  posDateMonthFormats: string[]; //Possible Formats for Month in Date
  formatDateDay: string; //Format for Day in Date
  posDateDayFormats: string[]; // Possible Formats for Day in Date
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
    this.formatDate = 'M/d/yy';
    this.formatDateMonth = 'MMMM';
    this.formatDateDay = 'EEEE';
    this.posTimeFormats = ['h','hh','H','HH','m','mm','s','ss','h:mm','hh:mm','hh:mm:ss','H:mm','HH:mm','HH:mm:ss'];
    this.posSecTimeFormats = [':ss',':s'];
    this.posDateFormats = ['none','M/d/yy','M/d/yyyy','M.d.yy','M.d.yyyy'];
    this.posDateMonthFormats = ['none', 'MMMM'];
    this.posDateDayFormats = ['none', 'EEEE'];
    this.clockFontSize = 4.5;
    this.dateFontSize = 2;
    this.newsFontSize = 1;
    this.newsInterval = 30;
  }
}
