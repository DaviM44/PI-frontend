import { TestBed } from '@angular/core/testing';

import { AlocService } from './aloc.service';

describe('AlocService', () => {
  let service: AlocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
