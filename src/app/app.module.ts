import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//import { Timer } from 'angular-timer'; // AngularJS - not 4??

//Services
import { ParticipantService } from './services/participant/participant.service';
import { SettingsService } from './services/settings/settings.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimerComponent } from './components/timer/timer.component';
import { ParticipantListComponent } from './components/participant-list/participant-list.component';
import { SettingsComponent } from './components/settings/settings.component';




const appRoutes: Routes = [
  { path: '', component: TimerComponent },
  { path: 'participants', component: ParticipantListComponent },
  { path: 'settings', component: SettingsComponent }
  //{ path: '', component: Component }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimerComponent,
    ParticipantListComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ParticipantService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
