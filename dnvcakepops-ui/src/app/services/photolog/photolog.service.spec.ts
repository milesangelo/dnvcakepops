import { TestBed } from '@angular/core/testing';

import { PhotoLogService } from './photolog.service';

describe('PhotoLogService', () => {
  let service: PhotoLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
