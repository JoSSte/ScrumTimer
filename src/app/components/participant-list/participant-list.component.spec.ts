import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ParticipantListComponent } from './participant-list.component';
import { ParticipantService } from '../../services/participant/participant.service';
import { SettingsService } from '../../services/settings/settings.service';
import { Participant } from '../../models/Participant';

describe('ParticipantListComponent', () => {
  let component: ParticipantListComponent;
  let partService: ParticipantService;
  let settingService: SettingsService;
  let fixture: ComponentFixture<ParticipantListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParticipantListComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        FormsModule
      ],
      providers: [
        ParticipantService,
        SettingsService
      ]
    })
      .compileComponents();
    partService = TestBed.inject(ParticipantService);
    settingService = TestBed.inject(SettingsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // eslint-disable-next-line max-len
  const pJSON = '[{"init":"GG","name":"Giro Gearloose","time":0},{"init":"DD","name":"Donald Duck","time":0},{"init":"SMD","name":"Scrooge McDuck","time":0}]';

  const p1 = new Participant('SMD', 'Scrooge McDuck', 0);
  const p2 = new Participant('DD', 'Donald Duck', 0);
  const p3 = new Participant('GG', 'Giro Gearloose', 0);

  it('component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('be able to add one participant to an empty list', () => {
    component.participantService.purgeParticipants();
    component.init = p1.init;
    component.name = p1.name;
    component.addParticipant();

    // list should be 1 long
    expect(component.participantList.length).toEqual(1);

    // name should match
    expect(component.participantList[0].name).toEqual(p1.name);
    // init should match
    expect(component.participantList[0].init).toEqual(p1.init);

    // fields should be reset
    expect(component.init).toEqual('');
    expect(component.name).toEqual('');

  });

  it('be able to add two participants to an empty list', () => {
    component.participantService.purgeParticipants();
    component.init = p1.init;
    component.name = p1.name;
    component.addParticipant();

    // list should be 1 long
    expect(component.participantList.length).toEqual(1);

    // fields should be reset
    expect(component.init).toEqual('');
    expect(component.name).toEqual('');

    component.init = p2.init;
    component.name = p2.name;
    component.addParticipant();

    // list should be 2 long
    expect(component.participantList.length).toEqual(2);
    // fields should be reset
    expect(component.init).toEqual('');
    expect(component.name).toEqual('');
    // name1 should match
    expect(component.participantList[1].name).toEqual(p1.name);
    // init1 should match
    expect(component.participantList[1].init).toEqual(p1.init);

    // name2 should match
    expect(component.participantList[0].name).toEqual(p2.name);
    // init2 should match
    expect(component.participantList[0].init).toEqual(p2.init);

  });

  it('be able to remove participant', () => {
    component.participantService.purgeParticipants();
    component.init = p1.init;
    component.name = p1.name;
    component.addParticipant();

    component.init = p2.init;
    component.name = p2.name;
    component.addParticipant();

    // list should be 2 long
    expect(component.participantList.length).toEqual(2);

    const removalStatus = component.removeParticipant(p1);

    expect(removalStatus).toBeTruthy();

    // list should be 1 long
    expect(component.participantList.length).toEqual(1);

    // name should match p2
    expect(component.participantList[0].name).toEqual(p2.name);
    // init should match p2
    expect(component.participantList[0].init).toEqual(p2.init);

  });

  it('be able to export participants', () => {
    component.participantService.purgeParticipants();
    component.init = p1.init;
    component.name = p1.name;
    component.addParticipant();

    component.init = p2.init;
    component.name = p2.name;
    component.addParticipant();

    component.init = p3.init;
    component.name = p3.name;
    component.addParticipant();

    // list should be 3 long
    expect(component.participantList.length).toEqual(3);

    component.exportParticipants();

    expect(component.jsonParticipants).toEqual(pJSON);

  });

  it('be able to import participants', () => {
    component.participantService.purgeParticipants();
    component.jsonParticipants = pJSON;

    component.importParticipants();
    // list should be 3 long
    expect(component.participantList.length).toEqual(3);

    expect(component.jsonParticipants).toEqual('');


  });

});
