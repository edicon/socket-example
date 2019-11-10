import { TestBed } from '@angular/core/testing';

import { MatUtilsService } from './mat-utils.service';

describe('AppMatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatUtilsService = TestBed.get(MatUtilsService);
    expect(service).toBeTruthy();
  });
});
