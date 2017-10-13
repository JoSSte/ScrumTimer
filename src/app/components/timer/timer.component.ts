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
  private $currentCounter: Observable<number>;
  private subscription: Subscription;
  private participantList: Participant[];

  // variables for session
  private totalMaxTime = 60 * 15;
  private recommendedIndividualTime = 120;
  private currentParticipant = 0;

  // variables for indiviual
  private individualMaxTime = 120;
  private currentCounter = 0;
  private currentPercent: number = 0;





  constructor(public participantService: ParticipantService, elm: ElementRef) {
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
    this.$currentCounter = Observable.interval(1000).map((x) => {

      this.currentCounter++;
      this.currentPercent = Math.round(this.currentCounter / this.individualMaxTime * 100);
      if (this.currentCounter == this.individualMaxTime) {
        this.currentPercent = 100;
        this.subscription.unsubscribe();
      }
      return x;
    });

    this.subscription = this.$currentCounter.subscribe((x) => this.currentCounter.toString());
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  nextParticipant(): void {
    this.currentParticipant++;
  }






}