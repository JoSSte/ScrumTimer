import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ParticipantService } from './participant.service';
import { SettingsService } from '../settings/settings.service';

describe('ParticipantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipantService, SettingsService ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([ParticipantService], (service: ParticipantService) => {
    expect(service).toBeTruthy();
  }));
});
