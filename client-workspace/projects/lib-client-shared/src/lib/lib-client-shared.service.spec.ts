import {TestBed} from '@angular/core/testing';

import {LibClientSharedService} from './lib-client-shared.service';

describe('LibClientSharedService', () => {
  let service: LibClientSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibClientSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
