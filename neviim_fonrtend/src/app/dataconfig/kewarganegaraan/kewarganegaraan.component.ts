import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-kewarganegaraan',
  templateUrl: './kewarganegaraan.component.html',
  styleUrls: ['./kewarganegaraan.component.css']
})
export class KewarganegaraanComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
