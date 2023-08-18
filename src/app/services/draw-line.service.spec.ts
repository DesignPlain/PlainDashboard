import { TestBed } from '@angular/core/testing';

import { DrawLineService } from './draw-line.service';

describe('DrawLineService', () => {
  let service: DrawLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
