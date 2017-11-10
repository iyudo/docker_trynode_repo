import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-status-sipil',
  templateUrl: './status-sipil.component.html',
  styleUrls: ['./status-sipil.component.css']
})
export class StatusSipilComponent implements OnInit {
  
  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
