import { TestBed } from '@angular/core/testing';

import { AddComponentService } from './add-component.service';

describe('AddComponentService', () => {
  let service: AddComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
