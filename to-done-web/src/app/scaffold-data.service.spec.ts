import { TestBed } from '@angular/core/testing';

import { ScaffoldDataService } from './scaffold-data.service';

describe('ScaffoldDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScaffoldDataService = TestBed.get(ScaffoldDataService);
    expect(service).toBeTruthy();
  });
});
