import { Component, OnInit } from '@angular/core';
import packageInfo from '../../../../package.json';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  public version: string = packageInfo.version;

  constructor() { }

  ngOnInit() {
  }

}
