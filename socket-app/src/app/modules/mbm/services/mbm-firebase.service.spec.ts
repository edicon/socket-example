import { TestBed } from '@angular/core/testing';

import { MbmFirebaseService } from './mbm-firebase.service';

describe('MbmFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MbmFirebaseService = TestBed.get(MbmFirebaseService);
    expect(service).toBeTruthy();
  });
});
