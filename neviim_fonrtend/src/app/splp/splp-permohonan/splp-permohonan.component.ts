import { Component, OnInit } from '@angular/core';
import {TitleConfig} from '../../app.var';

@Component({
  selector: 'app-splp-permohonan',
  templateUrl: './splp-permohonan.component.html',
  styleUrls: ['./splp-permohonan.component.css']
})
export class SplpPermohonanComponent implements OnInit {

  title = TitleConfig;

  constructor() { }

  ngOnInit() {
  }

}
