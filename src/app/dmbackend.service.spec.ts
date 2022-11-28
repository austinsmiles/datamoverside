import { TestBed } from '@angular/core/testing';

import { DmbackendService } from './dmbackend.service';

describe('DmbackendService', () => {
  let service: DmbackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmbackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
