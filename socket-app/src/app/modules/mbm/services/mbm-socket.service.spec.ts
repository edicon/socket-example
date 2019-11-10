import { TestBed } from '@angular/core/testing';

import { NbmSocketService } from './nbm-socket.service';

describe('NbmSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NbmSocketService = TestBed.get(NbmSocketService);
    expect(service).toBeTruthy();
  });
});
