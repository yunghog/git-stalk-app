import { TestBed } from '@angular/core/testing';

import { SavedRepoService } from './saved-repo.service';

describe('SavedRepoService', () => {
  let service: SavedRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
