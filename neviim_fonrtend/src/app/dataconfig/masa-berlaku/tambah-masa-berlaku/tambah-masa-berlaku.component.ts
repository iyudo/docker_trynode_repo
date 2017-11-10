import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambah-masa-berlaku',
  templateUrl: './tambah-masa-berlaku.component.html',
  styleUrls: ['./tambah-masa-berlaku.component.css']
})
export class TambahMasaBerlakuComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
