import { TestBed } from '@angular/core/testing';

import { NewUpdateService } from './new-update.service';

describe('NewUpdateService', () => {
  let service: NewUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
