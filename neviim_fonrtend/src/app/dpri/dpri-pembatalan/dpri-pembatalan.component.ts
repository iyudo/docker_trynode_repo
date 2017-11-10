import { Component, OnInit } from '@angular/core';
import {TitleConfig} from '../../app.var';

@Component({
  selector: 'app-dpri-pembatalan',
  templateUrl: './dpri-pembatalan.component.html',
  styleUrls: ['./dpri-pembatalan.component.css']
})
export class DpriPembatalanComponent implements OnInit {

  title = TitleConfig;

  constructor() { }

  ngOnInit() {
  }

}
