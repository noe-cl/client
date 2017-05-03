import { TestBed, inject } from '@angular/core/testing';

import { LodestoneService } from './lodestone.service';

describe('LodestoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LodestoneService]
    });
  });

  it('should ...', inject([LodestoneService], (service: LodestoneService) => {
    expect(service).toBeTruthy();
  }));
});
