import { TestBed } from '@angular/core/testing';

import { KairoUiService } from './kairo-ui.service';

describe('KairoUiService', () => {
  let service: KairoUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KairoUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
