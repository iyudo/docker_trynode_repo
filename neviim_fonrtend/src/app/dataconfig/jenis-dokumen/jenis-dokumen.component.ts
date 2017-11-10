import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-jenis-dokumen',
  templateUrl: './jenis-dokumen.component.html',
  styleUrls: ['./jenis-dokumen.component.css']
})
export class JenisDokumenComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
