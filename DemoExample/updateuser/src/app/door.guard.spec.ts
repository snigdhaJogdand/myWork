import { TestBed, async, inject } from '@angular/core/testing';

import { DoorGuard } from './door.guard';

describe('DoorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoorGuard]
    });
  });

  it('should ...', inject([DoorGuard], (guard: DoorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
