import { TestBed, inject } from '@angular/core/testing';

import { XivdbService } from './xivdb.service';

describe('XivdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XivdbService]
    });
  });

  it('should ...', inject([XivdbService], (service: XivdbService) => {
    expect(service).toBeTruthy();
  }));
});
