import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { vi } from 'vitest';

import { NavbarComponent } from './navbar.component';
import { NavbarService } from '../../services/navbar/navbar.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  /*
  const previewWindowMock = {
    document: {
      write() { 
        console.log('mock write called');
      },
      body: {
        setAttribute() {
          console.log('mock setAttribute called');
         }
      }
    }
  } as unknown as Window;
*/
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: NavbarService, useValue: { hide: vi.fn(), visible: true } }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    vi.spyOn(window, 'open').mockReturnValue({} as Window);
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    vi.spyOn(NavbarComponent.prototype, 'openScrumTimer');
    vi.spyOn(NavbarComponent.prototype, 'openJira');
  });
  // TODO: improve tests https://angular.io/guide/testing-components-basics
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('with opener', () => {
    beforeEach(() => {
      // set opener to something
      window.opener = {} as object;
      fixture = TestBed.createComponent(NavbarComponent);
      component = fixture.componentInstance;
    });
    afterEach(() => {
      // reset the opener property to undefined so it's not set for other tests
      window.opener = null;
    });
    it('should hide the navbar when opened by a link',() => {
      component.ngOnInit();
      expect(component.noOpener).toBeFalsy();
    });
  });

  describe('without opener', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(NavbarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    it('openJira should return false if no jiraURL in localstorage',() => {
      localStorage.clear();
      expect(component.openJira()).toBeFalsy();
    });
    it('should trigger the jira window open event', () => {
      component.openJira();
      expect(component.jiraTimerWindow).toBeDefined();
    });
    it('should trigger the scrumtimer window open event', () => {
      component.openScrumTimer();
      expect(component.scrumTimerWindow).toBeDefined();
    });
    it('should trigger both openwindow functions when openWindows() is triggered', () => {
      component.openWindows();
      expect(component.jiraTimerWindow).toBeDefined();
      expect(component.scrumTimerWindow).toBeDefined();
      expect(NavbarComponent.prototype.openScrumTimer).toHaveBeenCalled();
      expect(NavbarComponent.prototype.openJira).toHaveBeenCalled();
    });
  });

});
