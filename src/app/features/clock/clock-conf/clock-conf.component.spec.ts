import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockConfComponent } from './clock-conf.component';

describe('ClockConfComponent', () => {
  let component: ClockConfComponent;
  let fixture: ComponentFixture<ClockConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
