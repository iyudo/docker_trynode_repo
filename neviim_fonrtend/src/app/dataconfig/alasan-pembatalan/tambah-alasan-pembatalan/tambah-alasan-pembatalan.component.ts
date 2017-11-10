import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambah-alasan-pembatalan',
  templateUrl: './tambah-alasan-pembatalan.component.html',
  styleUrls: ['./tambah-alasan-pembatalan.component.css']
})
export class TambahAlasanPembatalanComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
