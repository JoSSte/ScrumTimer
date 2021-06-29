import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { ParticipantListComponent } from './participant-list.component';
import { ParticipantService } from '../../services/participant/participant.service';
import { SettingsService } from '../../services/settings/settings.service';

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
        HttpClientModule
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
