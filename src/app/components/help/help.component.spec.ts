import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { VersionCheckService } from '../../services/versioncheck/version-check.service';
import { HelpComponent } from './help.component';

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HelpComponent],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        VersionCheckService
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // TODO: improve tests https://angular.io/guide/testing-components-basics
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
