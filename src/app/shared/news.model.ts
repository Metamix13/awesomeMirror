/*
  News class for the news API call.
    title: News Title
    source: News Source
    publishedAt: News Date
    description: News text
    urlToImage: Direct link to the image from the article
 */

export class News {
  public title: string;
  public source: object;
  public publishedAt: string;
  public description: string;
  public urlToImage: string;

  constructor() {
    //Init attributes with default values
    this.title = 'placeholder Title';
    this.source = {'id': 'placeholder ID', 'name': 'placeholder Source Name'};
    this.publishedAt = '';
    this.description = '';
    this.urlToImage = '';
  }
}
