import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastHourlyComponent } from './weather-forecast-hourly.component';

describe('WeatherForecastHourlyComponent', () => {
  let component: WeatherForecastHourlyComponent;
  let fixture: ComponentFixture<WeatherForecastHourlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastHourlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastHourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
