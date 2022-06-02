import { TestBed } from '@angular/core/testing';

import { ShareMoviesService } from './share-movies.service';

describe('ShareMoviesService', () => {
  let service: ShareMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
