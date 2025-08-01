import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { VersionCheckService } from './version-check.service';

describe('VersionCheckService', () => {
  let service: VersionCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        VersionCheckService
      ]
    });
    service = TestBed.inject(VersionCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
