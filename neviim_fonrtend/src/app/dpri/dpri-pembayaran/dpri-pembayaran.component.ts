import { Component, OnInit } from '@angular/core';
import {TitleConfig} from '../../app.var';

@Component({
  selector: 'app-dpri-pembayaran',
  templateUrl: './dpri-pembayaran.component.html',
  styleUrls: ['./dpri-pembayaran.component.css']
})
export class DpriPembayaranComponent implements OnInit {

  title = TitleConfig;

  constructor() { }

  ngOnInit() {
  }

}
