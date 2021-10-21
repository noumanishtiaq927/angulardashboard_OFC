import { TestBed } from '@angular/core/testing';

import { GraphcardserviceService } from './graphcardservice.service';

describe('GraphcardserviceService', () => {
  let service: GraphcardserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphcardserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
