import { Component, OnInit } from '@angular/core';
import { Participant } from "../../models/Participant";
import { ParticipantService } from "../../services/participant/participant.service";


@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  private init: string = "";
  private name: string = "";
  private participantList: Participant[];
  private jsonParticipants: string = "";

  constructor(public participantService: ParticipantService) {

  }

  ngOnInit() {
    this.participantList = this.participantService.getParticipants();
  }

  addParticipant() {
    if (this.init.length > 1 && this.name.length > 2)
      this.participantService.addParticipant({ "init": this.init, "name": this.name });
    this.init = "";
    this.name = "";
  }

  removeParticipant(participant: Participant) {
    this.participantService.removeParticipant(participant);
  }

  exportParticipants() {
    this.jsonParticipants = this.participantService.exportParticipants();
  }

  importParticipants() {
    this.participantService.importParticipants(this.jsonParticipants);
    this.participantList = this.participantService.getParticipants();
    this.jsonParticipants = "";
  }

  sortParticipants() {
    console.log("[sortParticipants()] This function has not yet been implemented");
  }
}
