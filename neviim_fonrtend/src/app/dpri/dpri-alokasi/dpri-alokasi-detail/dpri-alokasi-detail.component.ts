import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-dpri-alokasi-detail',
  templateUrl: './dpri-alokasi-detail.component.html',
  styleUrls: ['./dpri-alokasi-detail.component.css']
})
export class DpriAlokasiDetailComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
