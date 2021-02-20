import { TestBed } from '@angular/core/testing';

import { LibServerApiService } from './lib-server-api.service';

describe('LibServerApiService', () => {
  let service: LibServerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibServerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
