import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastWeeklyComponent } from './weather-forecast-weekly.component';

describe('WeatherForecastWeeklyComponent', () => {
  let component: WeatherForecastWeeklyComponent;
  let fixture: ComponentFixture<WeatherForecastWeeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastWeeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
