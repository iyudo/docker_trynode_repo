import { Component, OnInit } from '@angular/core';
import {TitleConfig} from '../app.var';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  title = TitleConfig;

  constructor() { }
  

  ngOnInit() {
  }

}
