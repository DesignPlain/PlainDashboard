import { TestBed } from '@angular/core/testing';

import { ComponentMoveService } from './component-move.service';

describe('ComponentMoveService', () => {
  let service: ComponentMoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentMoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
