import { TestBed } from '@angular/core/testing';

import { BiometriaService } from './biometria.service';

describe('BiometriaService', () => {
  let service: BiometriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiometriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
