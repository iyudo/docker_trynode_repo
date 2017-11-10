import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
