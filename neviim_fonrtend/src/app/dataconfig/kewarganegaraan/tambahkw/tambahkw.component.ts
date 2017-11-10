import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambahkw',
  templateUrl: './tambahkw.component.html',
  styleUrls: ['./tambahkw.component.css']
})
export class TambahkwComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
