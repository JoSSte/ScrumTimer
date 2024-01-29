import { Injectable } from '@angular/core';
@Injectable()
export class SettingsService {
  private useGlobalMaxTime = true;
  private globalMaxTime: number = 60 * 15;
  private remoteParticipantList = '';
  private jiraURL = '';

  constructor() { }

  getGlobalMaxTime(): number {
    if (localStorage.getItem('settings') === null) {
      this.globalMaxTime = 60 * 15;
    } else {
      this.globalMaxTime = JSON.parse(localStorage.getItem('settings'))[1];
    }
    return this.globalMaxTime;
  }

  getUseGlobalMaxTime(): boolean {
    if (localStorage.getItem('settings') === null) {
      this.useGlobalMaxTime = true;
    } else {
      this.useGlobalMaxTime = JSON.parse(localStorage.getItem('settings'))[0];
    }
    return this.useGlobalMaxTime;
  }

  getRemoteParticipantListURL(): string {
    if (localStorage.getItem('settings') === null) {
      this.remoteParticipantList = '';
    } else {
      this.remoteParticipantList = JSON.parse(localStorage.getItem('settings'))[2];
    }
    return this.remoteParticipantList;
  }

  getJiraURL(): string {
    if (localStorage.getItem('JiraURL') === null) {
      this.jiraURL = '';
    } else {
      this.jiraURL = localStorage.getItem('JiraURL');
    }
    return this.jiraURL;
  }

  usesRemoteParticipantList(): boolean {
    return this.getRemoteParticipantListURL() !== '';
  }

  setGlobalMaxTime(newTime: number) {
    this.globalMaxTime = newTime;
    this.saveSettings();
  }

  setRemoteParticipantList(newUrl: string) {
    this.remoteParticipantList = newUrl;
    this.saveSettings();
  }

  setJiraURL(newUrl: string) {
    this.jiraURL = newUrl;
    if(newUrl !== ''){
      localStorage.setItem('JiraURL', this.jiraURL);
    }else {
      localStorage.removeItem('JiraURL');
    }
  }

  setUseGlobalMaxTime(useGMTime: boolean) {
    this.useGlobalMaxTime = useGMTime;
    this.saveSettings();
  }

  exportSettings() {
    return JSON.stringify([this.useGlobalMaxTime, this.globalMaxTime, this.remoteParticipantList]);
  }

  saveSettings() {
    localStorage.setItem('settings', this.exportSettings());
  }

  // overwrite localstorage, and refresh local list of participants from there...
  importSettings(jsonSettings) {
    localStorage.setItem('participants', jsonSettings);
    this.exportSettings();
  }

}
