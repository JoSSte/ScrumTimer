import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Participant } from "../../models/Participant";
import { ParticipantService } from "../../services/participant/participant.service";
import { Observable, Subscription } from 'rxjs/Rx';
import { SecondsPipe } from "../../pipes/hhmmss.pipe";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  $currentCounter: Observable<number>;
  subscription: Subscription;
  participantList: Participant[];
  absentParticipants: Participant[] = Array();
  doneParticipants: Participant[] = Array();

  // variables for session
  totalMaxTime = 60 * 15;
  recommendedIndividualTime = 120;
  totalPercent = 0;
  totalElapsed = 0;

  // variables for indiviual
  individualMaxTime: number = 120;
  //private individualTime: number = 120;
  currentPercent: number = 0;
  currentParticipant: Participant;

  future: Date;
  futureString: string;
  diff: number;
  currentDiff: number;
  currentElapsed: number = 0;
  timerActive: boolean = false;

  constructor(public participantService: ParticipantService, elm: ElementRef) {
  }

  ngOnInit() {
    this.participantList = this.participantService.getParticipants();
    this.shuffleParticipants();
  }

  ngOnDestroy(): void {
    if (this.$currentCounter != null) {
      this.stopTimer();
    }
  }

  stopTimer() {
    //save time for participant
    this.currentParticipant.time = this.currentElapsed;
    this.currentPercent = 0;
    //move first Participant to done participants
    this.doneParticipants.push(this.currentParticipant);
    //remove the top participant
    this.participantList.splice(0, 1);
    // set progressbar to 100%
    this.currentPercent = 100;
    this.timerActive = false;
    //stop timer
    this.subscription.unsubscribe();
  }

  startTimer() {
    this.future = new Date();
    // set the timer to a time in the future, based on "individualMaxTime" seconds
    this.future.setSeconds(this.future.getSeconds() + this.individualMaxTime);

    //console.log(this.future);
    this.$currentCounter = Observable.interval(1000).map((x) => {
      this.currentDiff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      this.currentElapsed = this.individualMaxTime - this.currentDiff;
      this.currentPercent = Math.round((this.currentElapsed / this.individualMaxTime) * 100);
      return x;
    });

    this.subscription = this.$currentCounter.subscribe((x) => this.currentDiff);
    this.timerActive = true;
  }


  nextParticipant() {
    //save time for participant
    this.participantList[0].time = this.currentElapsed;
    //add up total elapsed time
    this.totalElapsed += this.currentElapsed;
    this.currentElapsed = 0;
    this.currentDiff = 0;
    this.currentPercent = 0;
    //move first Participant to done participants
    this.doneParticipants.push(this.participantList[0]);
    //remove the top participant
    this.participantList.splice(0, 1);
    if (this.participantList.length > 0) {
      this.currentParticipant = this.participantList[0];
    } else {
      this.currentParticipant = { "name": "", "init": "" };

    }
    this.totalPercent = Math.round((this.doneParticipants.length / (this.participantList.length + this.doneParticipants.length)) * 100);
    this.currentPercent = 0;
    this.currentDiff = 0;
    this.currentPercent = 0;
    this.startTimer();
  }

  resetTimer() {
    //move all participants from done to present
    for (var i = this.doneParticipants.length - 1; i >= 0; i--) {
      //reset time taken
      this.doneParticipants[i].time = 0;
      this.participantList.push(this.doneParticipants[i]);
      this.doneParticipants.splice(i, 1);
    }

    //reset timers
    this.totalElapsed = 0;
    this.totalPercent = 0;
    this.currentPercent = 0;
    this.currentDiff = 0;
    this.currentParticipant = this.participantList[0];
    this.currentPercent = 0;



  }

  /**
   * Shuffles an array pseudo-randomly
   * 
   * @param array 
   */
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

  shuffleParticipants() {
    this.participantList = this.shuffle(this.participantList);
    this.currentParticipant = this.participantList[0];
  }

  /**
   * Mark participant as absent.
   * 
   * note that the last two participants cannot be marked as absent.
   * 
   * @param participant Participant to mark as absent
   */
  markAbsent(participant) {
    if (this.participantList.length <= 2) {
      console.log("Cannot mark the last two participants absent.");
    } else {
      var idx: number = this.participantList.indexOf(participant);
      this.absentParticipants.push(participant);
      this.participantList.splice(idx, 1);
      this.currentParticipant = this.participantList[0];
    }
  }

  /**
   * Mark participant as present.
   * 
   * @param participant Participant to mark as present
   */
  markPresent(participant) {
    var idx: number = this.absentParticipants.indexOf(participant);
    this.participantList.push(participant);
    this.absentParticipants.splice(idx, 1);
    //console.log(this.absentParticipants);
  }


}
