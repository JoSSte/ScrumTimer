import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ParticipantService } from '../../services/participant/participant.service';
import { SettingsService } from '../../services/settings/settings.service';
import { TimerComponent } from './timer.component';
import { SecsPipe } from '../../pipes/secs.pipe';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimerComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        SecsPipe,
        FormsModule
      ],
      providers: [
        ParticipantService,
        SettingsService,
        SecsPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // TODO: improve tests https://angular.io/guide/testing-components-basics
   it('should create', () => {
     expect(component).toBeTruthy();
   });
});
