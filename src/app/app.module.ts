import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
// import { Timer } from 'angular-timer'; // AngularJS - not 4??

import { SecondsPipe } from './pipes/Seconds.pipe';

// Services
import { ParticipantService } from './services/participant/participant.service';
import { SettingsService } from './services/settings/settings.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimerComponent } from './components/timer/timer.component';
import { ParticipantListComponent } from './components/participant-list/participant-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HelpComponent } from './components/help/help.component';




const appRoutes: Routes = [
  { path: '', component: TimerComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'participants', component: ParticipantListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent }
  // { path: '', component: Component }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimerComponent,
    ParticipantListComponent,
    SettingsComponent,
    SecondsPipe,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [
    ParticipantService,
    SettingsService,
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
