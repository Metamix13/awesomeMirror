import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateConfComponent } from './date-conf.component';

describe('DateConfComponent', () => {
  let component: DateConfComponent;
  let fixture: ComponentFixture<DateConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
