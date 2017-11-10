import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambah-status-sipil',
  templateUrl: './tambah-status-sipil.component.html',
  styleUrls: ['./tambah-status-sipil.component.css']
})
export class TambahStatusSipilComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
