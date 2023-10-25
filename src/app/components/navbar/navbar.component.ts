import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar/navbar.service';

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
  constructor(
    public nav: NavbarService
    ) {
    const hasOpener = window.opener;
    let openerMessage = '';
    try {
      if (hasOpener) {
        this.noOpener = false;
        openerMessage = 'Not Displaying popout link. already popped out';
        this.nav.hide();
      } else {
        this.noOpener = true;
        openerMessage = 'Displaying pop out link';
      }
    } catch (e) {
      console.log(e);
      openerMessage = 'Not Displaying popout link. Already popped out (exception)';
      this.noOpener = false;
      this.nav.hide();
    }
    console.log(openerMessage);
  }

  openScrumTimer() {
    const swp = this.windowProps+ this.popupWidth + ',height=' + window.screen.availHeight;
    this.scrumTimerWindow = window.open(window.location.origin + window.location.pathname + '#/popin', 'TimerWindowName', swp );
  }

  openJira() {
    const jwp = this.windowProps + (window.screen.availWidth - this.popupWidth - 10) + ',height=' + window.screen.availHeight;
    const url = localStorage.getItem('JiraURL');
    if (url) {
      this.jiraTimerWindow = window.open(url, 'StoryWindowName', jwp);
    }else{
      console.log('no JiraURL in localStorage');
    }
  }

  openWindows() {
    console.log('Opening windows');
    this.openJira();
    this.openScrumTimer();
  }

  ngOnInit() {
    console.log('[Scrumtimer] Navbar init');
  }

}
