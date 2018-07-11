import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConfComponent } from './weather-conf.component';

describe('WeatherConfComponent', () => {
  let component: WeatherConfComponent;
  let fixture: ComponentFixture<WeatherConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
