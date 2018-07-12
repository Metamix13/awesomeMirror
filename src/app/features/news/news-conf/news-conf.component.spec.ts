import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsConfComponent } from './news-conf.component';

describe('NewsConfComponent', () => {
  let component: NewsConfComponent;
  let fixture: ComponentFixture<NewsConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
