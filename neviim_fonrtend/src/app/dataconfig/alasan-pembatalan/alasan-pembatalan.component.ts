import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-alasan-pembatalan',
  templateUrl: './alasan-pembatalan.component.html',
  styleUrls: ['./alasan-pembatalan.component.css']
})
export class AlasanPembatalanComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
