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
  private participatingParticipants: Participant[];
  private absentParticipants: Participant[] = Array();
  private doneParticipants: Participant[] = Array();

  // variables for session
  private totalMaxTime = 60 * 15;
  private totalTime: number = 120;
  private recommendedIndividualTime = 120;
  private overallPercent = 0;

  // variables for indiviual
  private individualMaxTime = 120;
  private currentPercent: number = 0;
  private currentParticipant: Participant;

  private future: Date;
  private futureString: string;
  private diff: number;
  private currentDiff: number;
  private currentElapsed: number = 0;
  private timerActive:boolean = false;

  constructor(public participantService: ParticipantService, elm: ElementRef) {
  }

  ngOnInit() {
    this.participatingParticipants = this.participantService.getParticipants();
    //this.future = new Date(this.futureString);
    this.future = new Date();
    //this.future.setMinutes(this.future.getMinutes() + 2) ;
    this.currentParticipant = this.participatingParticipants[0];
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  stopTimer() {
    //stop timer
    this.subscription.unsubscribe();
    //set nextParticipant
    this.nextParticipant();
    // set progressbar to 100%
    this.currentPercent = 100;
    this.timerActive = false;
  }

  startTimer() {
    // set the timer to a time in the future, based on "totalTime" seconds
    this.future.setSeconds(this.future.getSeconds() + this.totalTime);

    //console.log(this.future);
    this.$currentCounter = Observable.interval(1000).map((x) => {
      this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      this.currentElapsed = this.totalTime - this.diff;
      this.currentPercent = Math.round((this.currentElapsed / this.totalTime) * 100);
      return x;
    });

    this.subscription = this.$currentCounter.subscribe((x) => this.currentDiff);
    this.timerActive = true;
  }

  nextParticipant() {
    //save time for participant
    this.participatingParticipants[0].time = this.currentElapsed;
    this.currentElapsed = 0;
    //move first Participant to done participants
    this.doneParticipants.push(this.participatingParticipants[0]);
    //remove the top participant
    this.participatingParticipants.splice(0, 1);
    this.overallPercent = Math.round((this.doneParticipants.length / (this.participatingParticipants.length + this.doneParticipants.length)) * 100);
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

  markAbsent(participant) {
    if (this.participatingParticipants.length <= 2) {
      console.log("Cannot mark the last two participants absent.");
    } else {
      var idx: number = this.participatingParticipants.indexOf(participant);
      this.absentParticipants.push(participant);
      this.participatingParticipants.splice(idx, 1);
    }
  }

  markPresent(participant) {
    var idx: number = this.absentParticipants.indexOf(participant);
    this.participatingParticipants.push(participant);
    this.absentParticipants.splice(idx, 1);
    //console.log(this.absentParticipants);
  }


}
