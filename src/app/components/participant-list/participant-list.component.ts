import { Component, OnInit } from '@angular/core';
import { Participant } from "../../models/Participant";

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  newParticipant: Participant;
  participantList: Participant[] = [
    { "init": "JSS", "name": "Jonas Stevnsvig" },
    { "init": "RKI", "name": "Rasmus K" },
    { "init": "JB", "name": "Joacim B" },
    { "init": "RKT", "name": "Ronni KT" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
