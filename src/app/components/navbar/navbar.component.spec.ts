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
      declarations: [ NavbarComponent ],
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
  // it('should hide popout link when opened by script',() => {
  //   const windowSpy = spyOn(window, 'open').and.returnValue(previewWindowMock);
  //   
  // });
  it('should trigger the jira window open event', () =>{
    component.openJira();
    expect(component.jiraTimerWindow).toBeDefined();
  });
  it('should trigger the scrumtimer window open event', () =>{
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
