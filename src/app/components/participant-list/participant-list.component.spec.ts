import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { ParticipantListComponent } from './participant-list.component';
import { ParticipantService } from '../../services/participant/participant.service';

describe('ParticipantListComponent', () => {
  let component: ParticipantListComponent;
  let service: ParticipantService;
  let fixture: ComponentFixture<ParticipantListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParticipantListComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        ParticipantService
      ]
    })
      .compileComponents();
    service = TestBed.inject(ParticipantService);
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
