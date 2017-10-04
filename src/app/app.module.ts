import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimerComponent } from './components/timer/timer.component';
import { ParticipantListComponent } from './components/participant-list/participant-list.component';

const appRoutes: Routes = [
  { path: '', component: TimerComponent },
  { path: 'participants', component: ParticipantListComponent }
  //{ path: '', component: Component }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimerComponent,
    ParticipantListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
