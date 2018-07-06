import { TestBed, inject } from '@angular/core/testing';

import { ViewModeService } from './view-mode.service';

describe('ViewModeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewModeService]
    });
  });

  it('should be created', inject([ViewModeService], (service: ViewModeService) => {
    expect(service).toBeTruthy();
  }));
});
