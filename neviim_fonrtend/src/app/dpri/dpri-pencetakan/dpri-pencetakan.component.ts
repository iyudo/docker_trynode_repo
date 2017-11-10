import { Component, OnInit } from '@angular/core';
import {TitleConfig} from '../../app.var';

@Component({
  selector: 'app-dpri-pencetakan',
  templateUrl: './dpri-pencetakan.component.html',
  styleUrls: ['./dpri-pencetakan.component.css']
})
export class DpriPencetakanComponent implements OnInit {

  title = TitleConfig;

  constructor() { }

  ngOnInit() {
  }

}
