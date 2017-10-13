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
  private currentDiff: number;
  private currentElapsed: number = 0;
  private $counter: Observable<number>;

  private totalTime: number = 10;

  private subscription: Subscription;
  private message: string;
  private participantList: Participant[];
  private currentParticipant = 0;

  constructor(public participantService: ParticipantService, elm: ElementRef) {
    //this.futureString = elm.nativeElement.getAttribute('inputDate');
    //console.log(this.futureString);
    //this.futureString = 'January 1, 2018 12:00:00';
  }

  ngOnInit() {
    this.participantList = this.participantService.getParticipants();
    //this.future = new Date(this.futureString);
    this.future = new Date();
    //this.future.setMinutes(this.future.getMinutes() + 2) ;

  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  stopTimer() {
    this.subscription.unsubscribe();
  }

  startTimer() {
    // set the timer to a time in the future, based on "totalTime" seconds
    this.future.setSeconds(this.future.getSeconds() + this.totalTime);

    //console.log(this.future);
    this.$counter = Observable.interval(1000).map((x) => {
      this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      this.currentElapsed = this.totalTime - this.diff;
      return x;
    });

    this.subscription = this.$counter.subscribe((x) => this.currentDiff);

  }

  nextParticipant() {
    if (this.currentParticipant < this.participantList.length) {
      this.currentParticipant++;
    } else {
      this.message = "No more participants";
    }
  }


  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }





}
