import { Component, OnInit, inject, isDevMode } from '@angular/core';
import { NavbarService } from '../../services/navbar/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class NavbarComponent implements OnInit {
  noOpener = true;
  scrumTimerWindow = null;
  jiraTimerWindow = null;
  private windowProps = 'resizable=no,scrollbars,status,top=0,right=0,width=';
  private popupWidth = 360;
  public nav = inject(NavbarService);

  ngOnInit() {
    const hasOpener = window.opener;
    let openerMessage = '';

    if (hasOpener) {
      this.noOpener = false;
      openerMessage = 'Not Displaying popout link. already popped out';
      this.nav.hide();
    } else {
      this.noOpener = true;
      openerMessage = 'Displaying pop out link';
    }
    if( isDevMode() ) {
      console.info(openerMessage);
  }
  }

  openScrumTimer() {
    const swp = this.windowProps + this.popupWidth + ',height=' + window.screen.availHeight;
    this.scrumTimerWindow = window.open(window.location.origin + window.location.pathname + '#/popin', 'TimerWindowName', swp);
  }

  openJira(): boolean {
    const jwp = this.windowProps + (window.screen.availWidth - this.popupWidth - 10) + ',height=' + window.screen.availHeight;
    const url = localStorage.getItem('JiraURL');
    if (url) {
      this.jiraTimerWindow = window.open(url, 'StoryWindowName', jwp);
      return true;
    } else {
      console.warn('no JiraURL in localStorage');
      return false;
    }
  }

  openWindows() {
    //console.debug('Opening windows');
    this.openJira();
    this.openScrumTimer();
  }

}
