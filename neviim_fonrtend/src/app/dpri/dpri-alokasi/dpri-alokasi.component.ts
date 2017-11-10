import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-dpri-alokasi',
  templateUrl: './dpri-alokasi.component.html',
  styleUrls: ['./dpri-alokasi.component.css']
})
export class DpriAlokasiComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
