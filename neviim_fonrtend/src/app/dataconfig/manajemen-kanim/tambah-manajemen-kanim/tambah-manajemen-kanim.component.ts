import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambah-manajemen-kanim',
  templateUrl: './tambah-manajemen-kanim.component.html',
  styleUrls: ['./tambah-manajemen-kanim.component.css']
})
export class TambahManajemenKanimComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
