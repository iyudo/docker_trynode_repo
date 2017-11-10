import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from '../app.component';
import { RouterUrl } from '../app.var';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends AppComponent implements OnInit {

  route:string;
  
  toggleActive: false;

  routerUrl = RouterUrl;

  constructor(location:Location, router:Router){
    super(location, router);
  }

  ngOnInit() {
    
  }
}
