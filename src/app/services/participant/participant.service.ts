import { inject, Injectable } from '@angular/core';
import { Participant, ParticipantAdapter } from '../../models/Participant';
import { SettingsService } from '../settings/settings.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ParticipantService {
  participants!: Participant[];
  lastSync: Date = new Date('2000-01-01T00:00:00.000Z');
  public settings = inject(SettingsService);
  private http = inject(HttpClient);
  private adapter = inject(ParticipantAdapter);

  constructor() {
    this.getLastSync();
  }

  getLastSync() {
    const localSync = localStorage.getItem('lastSync');
    if (localSync == null) {
      //console.debug('never synced');
    } else {
      console.info('Last sync: ' + localSync);
    }
  }

  setLastSync(d: Date) {
    localStorage.setItem('lastSync', d.toISOString());
  }

  getParticipants() {

    const stored = localStorage.getItem('participants');
    if (stored === null) {
      this.participants = [];
    } else {
      // TODO: check if the localstorage Entry is valid JSON before returning
      this.participants = JSON.parse(stored);
    }
    return this.participants;
  }

  addParticipant(participant: Participant) {
    this.participants.unshift(participant);
    localStorage.setItem('participants', JSON.stringify(this.participants));
  }

  /**
   * Remove specified participant from the
   * @param participant Participant to be removed
   */
  removeParticipant(participant: Participant): boolean {
    let removed = false;
    for (let i = 0; i < this.participants.length; i++) {
      if (participant.name === this.participants[i].name  && participant.init === this.participants[i].init  ) {
        this.participants.splice(i, 1);
        removed = true;
      }
    }
    localStorage.setItem('participants', JSON.stringify(this.participants));
    return removed;
  }

  /**
   * Remove all participants in the list
   */
  purgeParticipants() {
    this.participants.splice(0);
    localStorage.setItem('participants', JSON.stringify(this.participants));
  }

  exportParticipants() {
    return JSON.stringify(this.participants);
  }

  // overwrite localstorage, and refresh local list of participants from there...
  importParticipants(jsonParticipants: string) {
    localStorage.setItem('participants', jsonParticipants);
    this.exportParticipants();
  }

  getRemoteParticipants(): Observable<Participant[]> {
    if (this.settings.usesRemoteParticipantList()) {
      // console.debug('remote participant list affirmative. Checking URL');
      const durationSinceLastSync = (Date.now()).valueOf() - this.lastSync.valueOf();

      // If more than 15 hours since sync, update
      if (durationSinceLastSync > 54000) {
        const url = this.settings.getRemoteParticipantListURL();
        // console.debug('Seconds since last sync: ' + durationSinceLastSync + ' syncing from ' + url + ' . . .');
        return this.http
        .get<string[]>(url)
        .pipe(map((data: string[]) => data.map((item) => this.adapter.adapt(item))));

      } else {
        console.error(new Error('not syncing'));
        return new Observable<Participant[]>(observer => observer.next([]));
      }
    }
    return new Observable<Participant[]>(observer => observer.next([]));
  }

  updateRemoteParticipants(){
    this.getRemoteParticipants().subscribe(resp => {
      // display its headers
      this.participants =  resp;
      localStorage.setItem('participants', JSON.stringify(this.participants));
      this.setLastSync(new Date());
    });
  }
}
