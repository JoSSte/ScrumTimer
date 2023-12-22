import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SettingsService } from '../../services/settings/settings.service';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let service: SettingsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      providers: [SettingsService],
      imports: [
        FormsModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.removeItem('settings');
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('no settings saved', () => {
    const settings = localStorage.getItem('settings');
    expect(settings).toEqual(null);
  });

  it('should save settings - time', () => {
    const mTime = 500;
    component.globalMaxTime = mTime;
    component.saveSettings();
    const lsMt = JSON.parse(localStorage.getItem('settings'))[1];
    expect(lsMt).toEqual(mTime);
  });

  // TODO  parameterize
  it('should save settings - useGlobalTime false', () => {
    const bTime = false;
    component.useGlobalMaxTime = bTime;
    component.saveSettings();
    const lsMt = JSON.parse(localStorage.getItem('settings'))[0];
    expect(lsMt).toEqual(bTime);
  });

  // TODO  parameterize
  it('should save settings - useGlobalTime true', () => {
    const bTime = true;
    component.useGlobalMaxTime = bTime;
    component.saveSettings();
    const lsMt = JSON.parse(localStorage.getItem('settings'))[0];
    expect(lsMt).toEqual(bTime);
  });

  it('should save settings - remote participant list', () => {
    const url = 'https://josste.github.io/ScrumTimer/assets/json/participants_andeby.json';
    component.remoteParticipantListURL = url;
    component.useRemoteParticipantList = true;
    component.saveSettings();
    const lsUrl = JSON.parse(localStorage.getItem('settings'))[2];
    expect(lsUrl).toEqual(url);
  });

  it('should have a Jira URL', () => {
    const jiraUrl = 'http://httpbin.org/get';
    component.useJiraLinkURL = true;
    component.jiraLinkURL = jiraUrl;
    component.saveSettings();
    const jUrl = localStorage.getItem('JiraURL');
    expect(jUrl).toEqual(jiraUrl);
  });
});
