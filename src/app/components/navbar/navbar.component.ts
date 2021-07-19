import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  noOpener = true;
  scrumTimerWindow = null;
  jiraTimerWindow = null;
  private windowProps = 'resizable=no,scrollbars,status,top=0,right=0,width=';
  private popupWidth = 360;
  constructor() {
    const hasOpener = window.opener;
    let openerMessage = '';
    try {
      if (hasOpener) {
        this.noOpener = false;
        openerMessage = 'Not Displaying popout link. already popped out';
      } else {
        this.noOpener = true;
        openerMessage = 'Displaying pop out link';
      }
    } catch (e) {
      console.log(e);
      openerMessage = 'Not Displaying popout link. Already popped out (exception)';
      this.noOpener = false;
    }
    console.log(openerMessage);
  }
  openScrumTimer() {
    const swp = this.windowProps+ this.popupWidth + ',height=' + window.screen.availHeight;
    this.scrumTimerWindow = window.open(window.document.URL, 'TimerWindowName', swp );
  }
  openJira() {
    const jwp = this.windowProps + (window.screen.availWidth - this.popupWidth - 10) + ',height=' + window.screen.availHeight;
    let url = localStorage.getItem('JiraURL');
    if (!url) {
      url = 'about:blank';
      console.log('no JiraURL in localStorage');
    }
    this.jiraTimerWindow = window.open(url, 'StoryWindowName', jwp);
  }
  openWindows() {
    console.log('Opening windows');
    this.openJira();
    this.openScrumTimer();
  }
  ngOnInit() {
  }

}
