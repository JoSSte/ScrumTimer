import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ParticipantService } from './participant.service';
import { SettingsService } from '../settings/settings.service';
import { Subscription } from 'rxjs/Subscription';

describe('ParticipantService', () => {
  let service: ParticipantService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipantService, SettingsService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  beforeEach(() => {
    TestBed.inject(ParticipantService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  // Instead of check verify in each spec we can simply write in afterEach function.
  afterEach(() => {
    httpTestingController.verify();
  });

//  it('Test Get HTTP Request with HttpTesting Controller', () => {
//    const mockUserList = [
//      {
//        'init': 'IJ',
//        'name': 'Indiana Jonas'
//      },
//      {
//        'init': 'DJ',
//        'name': 'Doctor Jonas'
//      }
//    ];
//
//    service.getRemoteParticipants().subscribe((resp: any) => {
//      console.log('mock resp of get request', resp);
//      expect(resp.length).toBeGreaterThanOrEqual(1);
//      expect(resp).toEqual(mockUserList);
//    });
//
//    const request = httpTestingController.expectOne((service as any).getUserURL);
//    expect(request.request.method).toBe('GET');
//    expect(request.cancelled).toBeFalsy();
//    expect(request.request.responseType).toEqual('json');
//
//
//    /**
//     * Using .flush()
//      The request captured by the httpTestingController, req,
//      has a flush method on it which takes in whatever response you would like to provide for that request as an argument.
//     */
//    request.flush(mockUserList);
//
//    /**
//     * Verify All Requests are Complete
//      Once all req have been provided a response using flush, we can verify that there are no more pending requests after the test.
//      We have done this in afterEach function.
//
//      > httpTestingController.verify();
//     */
//
//  });

  it('should be created', inject([ParticipantService], (pService: ParticipantService) => {
    expect(pService).toBeTruthy();
  }));
  it('should log the sync', inject([ParticipantService], (pService: ParticipantService) => {
    const lastSyncDate = new Date();
    pService.setLastSync(lastSyncDate);
    expect(localStorage.getItem('lastSync')).toEqual(lastSyncDate.toISOString());
  }));
  // it('should update participant list', inject([ParticipantService], (pService: ParticipantService) => {
  // 
  //   pService.updateRemoteParticipants();
  //   expect(localStorage.getItem('participants')).toEqual(JSON.stringify(pService.participants));;
  // }));
});
