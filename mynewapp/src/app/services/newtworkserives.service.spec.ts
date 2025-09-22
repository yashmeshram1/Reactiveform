import { TestBed } from '@angular/core/testing';

import { NewtworkserivesService } from './newtworkserives.service';

describe('NewtworkserivesService', () => {
  let service: NewtworkserivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewtworkserivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
