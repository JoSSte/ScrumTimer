import { Component, OnInit } from '@angular/core';
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  useGlobalMaxTime: boolean;
  globalMaxTime: number;
  useRemoteParticipantList: boolean;
  remoteParticipantListURL: string;

  constructor(public settings: SettingsService) {
    
  }

  ngOnInit() {
    this.useGlobalMaxTime = this.settings.getUseGlobalMaxTime();
    this.globalMaxTime = this.settings.getGlobalMaxTime();
    this.remoteParticipantListURL = this.settings.getRemoteParticipantListURL();
    if(this.remoteParticipantListURL != ''){
      this.useRemoteParticipantList = true;
    }
  }

  saveSettings() {
    this.settings.setGlobalMaxTime(this.globalMaxTime);
    this.settings.setUseGlobelMaxTime(this.useGlobalMaxTime);
    if(this.useRemoteParticipantList){
      this.settings.setRemoteParticipantList(this.remoteParticipantListURL);
    }else {
      this.settings.setRemoteParticipantList('');
    }
    this.settings.saveSettings();
  }

  useRemoteParticipantListChecked() :boolean{
    return !this.useRemoteParticipantList;
  }

}
