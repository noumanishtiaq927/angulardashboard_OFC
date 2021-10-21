import { TestBed } from '@angular/core/testing';

import { CrucnoService } from './crucno.service';

describe('CrucnoService', () => {
  let service: CrucnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrucnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
