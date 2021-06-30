import { Injectable } from '@angular/core';
import { Participant } from '../../models/Participant';
import { SettingsService } from '../settings/settings.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ParticipantService {
  participants: Participant[];
  lastSync: Date = new Date('2000-01-01T00:00:00.000Z');

  constructor(public settings: SettingsService, private http: HttpClient) {
    this.getLastSync();
  }

  getLastSync() {
    const localSync = localStorage.getItem('lastSync');
    if(localSync == null){
      console.log('never synced');
    } else {
      console.log('Last sync: ' + localSync);
    }
  }

  setLastSync(d: Date) {
    localStorage.setItem('lastSync', d.toISOString());
  }

  getParticipants() {
    if (localStorage.getItem('participants') === null) {
      this.participants = [];
    } else {
      this.participants = JSON.parse(localStorage.getItem('participants'));
    }
    return this.participants;
  }

  addParticipant(participant: Participant) {
    this.participants.unshift(participant);
    localStorage.setItem('participants', JSON.stringify(this.participants));
  }

  removeParticipant(participant: Participant) {
    for (let i = 0; i < this.participants.length; i++) {
      if (participant === this.participants[i]) {
        this.participants.splice(i, 1);
      }
    }
    localStorage.setItem('participants', JSON.stringify(this.participants));
  }

  exportParticipants() {
    return JSON.stringify(this.participants);
  }

  // overwrite localstorage, and refresh local list of participants from there...
  importParticipants(jsonParticipants) {
    localStorage.setItem('participants', jsonParticipants);
    this.exportParticipants();
  }

  getRemoteParticipants() {
    if (this.settings.usesRemoteParticipantList()) {
      console.log('remote participant list affirmative. Checking URL');
      const durationSinceLastSync = (Date.now()).valueOf() - this.lastSync.valueOf();
      console.log('since last sync: ' + durationSinceLastSync);
      // TODO: check last sync and retreive

      const url = this.settings.getRemoteParticipantListURL();
      this.http.get(url).subscribe(result => {
        this.participants = result as Participant[];
        this.setLastSync(new Date());
      }, error => console.error(error));
      // TODO: update localstorage when done
    } else {
      console.log('using local participant list');
    }
  }

  compare(a, b) {
    if (a.last_nom < b.last_nom) {
return -1;
}
    if (a.last_nom > b.last_nom) {
return 1;
}
    return 0;
  }

}
