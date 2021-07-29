import { TestBed } from '@angular/core/testing';

import { DataWordPressService } from './data-word-press.service';

describe('DataWordPressService', () => {
  let service: DataWordPressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataWordPressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
