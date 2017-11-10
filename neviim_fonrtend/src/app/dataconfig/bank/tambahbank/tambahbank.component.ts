import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambahbank',
  templateUrl: './tambahbank.component.html',
  styleUrls: ['./tambahbank.component.css']
})
export class TambahbankComponent implements OnInit {

  title = TitleConfig; 

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
