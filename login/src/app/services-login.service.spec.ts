import { TestBed } from '@angular/core/testing';

import { ServicesLoginService } from './services-login.service';

describe('ServicesLoginService', () => {
  let service: ServicesLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
