export class News {
  public title: string;
  public source: object;
  public publishedAt: string;
  public description: string;
  public urlToImage: string;

  constructor(){
    this.title = 'placeholder Title';
    this.source = {'id': 'placeholder ID', 'name': 'placeholder Source Name'};
    this.publishedAt = '';
    this.description = '';
    this.urlToImage = '';
  }
}
