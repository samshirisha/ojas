import { TestBed } from '@angular/core/testing';

import { SinduService } from './sindu.service';

describe('SinduService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SinduService = TestBed.get(SinduService);
    expect(service).toBeTruthy();
  });
});
