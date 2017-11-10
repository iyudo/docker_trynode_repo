import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-masa-berlaku',
  templateUrl: './masa-berlaku.component.html',
  styleUrls: ['./masa-berlaku.component.css']
})
export class MasaBerlakuComponent implements OnInit {
  
  title = TitleConfig;

  routerUrl = RouterUrl;
  
  constructor() { }

  ngOnInit() {
  }

}
