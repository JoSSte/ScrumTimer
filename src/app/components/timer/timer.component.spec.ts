import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

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
        TimerComponent,
        SecsPipe
    ],
    imports: [RouterTestingModule.withRoutes([]),
        FormsModule],
    providers: [
        ParticipantService,
        SettingsService,
        SecsPipe,
        provideHttpClient(withInterceptorsFromDi())
    ]
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    if (component.participantList.length === 0) {
      component.participantList.push(new Participant('JVA', 'Joakim von And'));
      component.participantList.push(new Participant('AA', 'Anders And'));
      component.participantList.push(new Participant('DSY', 'Andersine And'));
    }
    //console.info("Participantlist Length:\t" + component.participantList.length);
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
    //console.log("Number of participants" + component.participantList.length);
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
  it('Reset works', () => {
    component.participantList.push(new Participant('TIM', 'Tim Timer'));
    expect(component.totalElapsed).toEqual(0);
    component.startTimer();
    // tweak since i cannot figure out how to pause the test to increment totalElapsed
    component.totalElapsed = 22;
    component.stopTimer();
    expect(component.totalElapsed).toBeGreaterThan(0);
    component.resetTimer();
    expect(component.totalElapsed).toEqual(0);
  });
// Disabling unstable test case
//  it('Shuffle works', () => {
//    component.participantList.push(new Participant('TIM', 'Tim Timer'));
//    component.participantList.push(new Participant('MIT', 'Mittle Minimas'));
//    const partListJSON = JSON.stringify(component.participantList);
//    component.shuffleParticipants();
//    expect(JSON.stringify(component.participantList)).not.toEqual(partListJSON);
//  });
  it('Handles absent participant', () => {
    const absentee = new Participant('CHR', 'Chris Sjokolade');
    component.participantList.push(absentee);
    component.participantList.push(new Participant('TT', 'Tintin'));
    component.participantList.push(new Participant('CPT', 'Kaptajn Haddock'));
    expect(component.absentParticipants.length).toEqual(0);
    expect(component.doneParticipants.length).toEqual(0);
    component.markAbsent(absentee);
    expect(component.absentParticipants.length).toEqual(1);
  });
// Disabling unstable test case
//  it('Handles attempt to mark all participants absent', () => {
//    const startList = component.participantList;
//    component.participantList.push(new Participant('CHR', 'Chris Sjokolade'));
//    expect(component.absentParticipants.length).toEqual(0);
//    expect(component.doneParticipants.length).toEqual(0);
//    // Attempt to mark all participants as absent
//    for (let i = 1; i < startList.length; i++) {
//      component.markAbsent(startList[i]);
//    }
//    console.debug('Participants:\t' + component.participantList.length);
//    expect(component.markAbsent(startList[0])).toBeFalsy();
//  });
});
