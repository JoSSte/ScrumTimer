import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  const previewWindowMock = {
    document: {
      write() { },
      body: {
        setAttribute() { }
      }
    }
  } as unknown as Window;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(NavbarComponent.prototype, 'openScrumTimer').and.callThrough();
    spyOn(NavbarComponent.prototype, 'openJira').and.callThrough();
  });
  // TODO: improve tests https://angular.io/guide/testing-components-basics
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('with opener', () => {
    beforeEach(() => {
      // set opener to something
      window.opener = {} as any;
      fixture = TestBed.createComponent(NavbarComponent);
      component = fixture.componentInstance;
    });
    afterEach(() => {
      // reset the opener property to undefined so it's not set for other tests
      window.opener = undefined as any;
    });
    it('should hide the navbar when opened by a link',() => {
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
