import { TestBed } from '@angular/core/testing';

import { NavbarService } from './navbar.service';

describe('NavbarServiceService', () => {
  let service: NavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be able to hide the navbar', () => {
    service.hide();
    expect(service.visible).toBeFalsy();
  });
  it('should be able to show the navbar', () => {
    service.hide();
    service.show();
    expect(service.visible).toBeTruthy();
  });
  it('should be able to toggle the navbar', () => {
    service.show();
    expect(service.visible).toBeTruthy();
    service.toggle();
    expect(service.visible).toBeFalsy();
    service.toggle();
    expect(service.visible).toBeTruthy();
  });
});
