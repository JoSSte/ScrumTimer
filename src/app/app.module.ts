import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes/*, ActivatedRoute */} from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
// import { Timer } from 'angular-timer'; // AngularJS - not 4??


// Services
import { ParticipantService } from './services/participant/participant.service';
import { SettingsService } from './services/settings/settings.service';
import { NavbarService } from './services/navbar/navbar.service';
import { VersionCheckService } from './services/versioncheck/version-check.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimerComponent } from './components/timer/timer.component';
import { ParticipantListComponent } from './components/participant-list/participant-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HelpComponent } from './components/help/help.component';

// Pipes
import { SecsPipe } from './pipes/secs.pipe';

const appRoutes: Routes = [
  { path: '', component: TimerComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'popin', component: TimerComponent },
  { path: 'participants', component: ParticipantListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent }
  // { path: '', component: Component }
];


@NgModule({ declarations: [
        AppComponent,
        NavbarComponent,
        TimerComponent,
        ParticipantListComponent,
        SettingsComponent,
        HelpComponent
    ],
    bootstrap: [
        AppComponent
    ], 
    imports: [
        BrowserModule,
        SecsPipe,
        FormsModule,
        RouterModule.forRoot(appRoutes, {})], providers: [
        ParticipantService,
        SettingsService,
        NavbarService,
        VersionCheckService,
        Location,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
