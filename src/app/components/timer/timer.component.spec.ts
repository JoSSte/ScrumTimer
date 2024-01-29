import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Participant } from '../../models/Participant';
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

  it('should start with no done participants', () => {
    expect(component.doneParticipants.length).toEqual(0);
  });

  it('works With Individual Max Time', () => {
    component.settingsService.setUseGlobalMaxTime(false);
    expect(component.totalMaxTime).toEqual(component.settingsService.getGlobalMaxTime());
  });

  it('Has some Participants, but none done, none absent as default', () => {
    console.log(component.participantList.length);
    expect(component.participantList.length).toBeGreaterThan(0);
    expect(component.doneParticipants.length).toEqual(0);
    expect(component.absentParticipants.length).toEqual(0);
  });
  it('Should decrease ParticipantList and increase DoneParticipantList when Next is clicked', () => {
    const initialList = component.participantList.length;
    const initialDoneList = component.doneParticipants.length;
    expect(component.participantList.length).toBeGreaterThan(0);
    expect(component.doneParticipants.length).toEqual(0);
    component.startTimer();
    component.nextParticipant();
    expect(component.participantList.length).toEqual(initialList - 1);
    expect(component.doneParticipants.length).toEqual(initialDoneList + 1);
  });
  // it('ParticipantList initial length should equal DoneParticipantList when all are through', () => {
  //   // console.log(component.participantList);
  //   component.participantList.push(new Participant('JVA', 'Joakim von And'));
  //   component.participantList.push(new Participant('AA', 'Anders And'));
  //   component.participantList.push(new Participant('DSY', 'Andersine And'));
  //   // console.log(component.participantList);
  // 
  //   const initialList = component.participantList.length;
  //   expect(component.participantList.length).toBeGreaterThan(0);
  //   expect(component.doneParticipants.length).toEqual(0);
  //   expect(component.absentParticipants.length).toEqual(0);
  //   component.startTimer();
  //   for (let participant of component.participantList) {
  //     console.log(participant.name);
  //     component.nextParticipant();
  //   }
  //   component.stopTimer();
  //   expect(component.doneParticipants.length).toEqual(initialList);
  // });
});
