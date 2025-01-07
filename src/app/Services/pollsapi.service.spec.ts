import { TestBed } from '@angular/core/testing';

import { PollsapiService } from './pollsapi.service';

describe('PollsapiService', () => {
  let service: PollsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PollsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
