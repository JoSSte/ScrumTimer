import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Participant } from "../../models/Participant";
import { ParticipantService } from "../../services/participant/participant.service";
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  private future: Date;
  private futureString: string;
  private diff: number;
  private $counter: Observable<number>;
  private subscription: Subscription;
  private message: string;
  participantList: Participant[];

  constructor(public participantService: ParticipantService, elm: ElementRef) {
    this.futureString = elm.nativeElement.getAttribute('inputDate');
    //console.log(this.futureString);
    //this.futureString = 'January 1, 2018 12:00:00';
  }

  dhms(t) {
    var days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
      days + 'd',
      hours + 'h',
      minutes + 'm',
      seconds + 's'
    ].join(' ');
  }


  ngOnInit() {
    this.participantList = this.participantService.getParticipants();
    //this.future = new Date(this.futureString);
    this.future = new Date();
    this.future.setMinutes(this.future.getMinutes() + 2) ;
    console.log(this.future);
    this.$counter = Observable.interval(1000).map((x) => {
      this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      return x;
    });

    this.subscription = this.$counter.subscribe((x) => this.message = this.dhms(this.diff));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }







}
