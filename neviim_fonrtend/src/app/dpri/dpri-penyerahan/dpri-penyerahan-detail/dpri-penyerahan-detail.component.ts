import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-dpri-penyerahan-detail',
  templateUrl: './dpri-penyerahan-detail.component.html',
  styleUrls: ['./dpri-penyerahan-detail.component.css']
})
export class DpriPenyerahanDetailComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
