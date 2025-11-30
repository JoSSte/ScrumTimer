import { Component, OnInit, inject } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    // eslint-disable-next-line @angular-eslint/prefer-standalone
    standalone: false
})
export class SettingsComponent implements OnInit {
  useGlobalMaxTime: boolean;
  globalMaxTime: number;
  useRemoteParticipantList: boolean;
  remoteParticipantListURL: string;
  jiraLinkURL: string;
  useJiraLinkURL: boolean;

  public settings = inject(SettingsService);

  ngOnInit() {
    this.useGlobalMaxTime = this.settings.getUseGlobalMaxTime();
    this.globalMaxTime = this.settings.getGlobalMaxTime();
    this.remoteParticipantListURL = this.settings.getRemoteParticipantListURL();
    this.jiraLinkURL = this.settings.getJiraURL();
    if(this.remoteParticipantListURL !== ''){
      this.useRemoteParticipantList = true;
    }
    if(this.jiraLinkURL !== ''){
      this.useJiraLinkURL = true;
    }
  }

  saveSettings() {
    this.settings.setGlobalMaxTime(this.globalMaxTime);
    this.settings.setUseGlobalMaxTime(this.useGlobalMaxTime);
    if(this.useRemoteParticipantList){
      this.settings.setRemoteParticipantList(this.remoteParticipantListURL);
    }else {
      this.settings.setRemoteParticipantList('');
    }
    if(this.useJiraLinkURL){
      this.settings.setJiraURL(this.jiraLinkURL);
    }else {
      this.settings.setJiraURL('');
    }
    this.settings.saveSettings();
  }

  useRemoteParticipantListChecked(): boolean{
    return !this.useRemoteParticipantList;
  }

  usejiraLinkChecked(): boolean {
    return !this.useJiraLinkURL;
  }

}
