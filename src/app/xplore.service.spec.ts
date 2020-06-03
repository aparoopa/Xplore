import { TestBed } from '@angular/core/testing';

import { XploreService } from './xplore.service';

describe('XploreService', () => {
  let service: XploreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XploreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
