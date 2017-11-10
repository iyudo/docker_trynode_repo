import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-dpri-penyerahan',
  templateUrl: './dpri-penyerahan.component.html',
  styleUrls: ['./dpri-penyerahan.component.css']
})
export class DpriPenyerahanComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
