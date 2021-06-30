import { Injectable } from '@angular/core';
import { Participant, ParticipantAdapter } from '../../models/Participant';
import { SettingsService } from "../settings/settings.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ParticipantService {
  participants: Participant[];
  lastSync: Date = new Date('2000-01-01T00:00:00.000Z');

  constructor(public settings: SettingsService, private http: HttpClient, private adapter: ParticipantAdapter) {
    this.getLastSync();
  }

  getLastSync() {
    let localSync = localStorage.getItem('lastSync');
    if (localSync == null) {
      console.log("never synced");
    } else {
      console.log("Last sync: " + localSync)
    }
  }

  setLastSync(d: Date) {
    localStorage.setItem('lastSync', d.toISOString());
  }

  getParticipants() {

    if (localStorage.getItem('participants') === null) {
      this.participants = [];
    } else {
      //TODO: check if the localstorage Entry is valid JSON before returning
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
      if (participant == this.participants[i]) {
        this.participants.splice(i, 1);
      }
    }
    localStorage.setItem('participants', JSON.stringify(this.participants));
  }

  exportParticipants() {
    return JSON.stringify(this.participants);
  }

  //overwrite localstorage, and refresh local list of participants from there...
  importParticipants(jsonParticipants) {
    localStorage.setItem('participants', jsonParticipants);
    this.exportParticipants();
  }

  getRemoteParticipants() {
    if (this.settings.usesRemoteParticipantList()) {
      console.log('remote participant list affirmative. Checking URL');
      let durationSinceLastSync = (Date.now()).valueOf() - this.lastSync.valueOf()

      //if more than 15 hours since sync, update
      if (durationSinceLastSync > 54000) {
        console.log("since last sync: " + durationSinceLastSync);
        let url = this.settings.getRemoteParticipantListURL();
        this.http.get(url).pipe(
          // Adapt each item in the raw data array
          map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
        );

        //  this.http.get(url).subscribe(result => {
        //    let parts = result as Participant[];
        //    console.log(typeof parts);
        //    //this.importParticipants(parts);
        //    //this.setLastSync(new Date());
        //  }, error => console.error(error));
        //  //TODO: update localstorage when done
        //}
      } else {
        console.log("not syncing");
      }
    } else {
      console.log('using local participant list');
    }
  }


}
