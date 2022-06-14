import { TestBed } from '@angular/core/testing';

import { FrameListService } from './frame-list.service';

describe('FrameListService', () => {
  let service: FrameListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
