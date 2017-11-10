import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  route:string;
  
  constructor(location:Location, router:Router){
    router.events.subscribe(val=>{
      this.route = location.path();
      
    });
  }

  ngOnInit(){
   
  }

  
  
  title = 'app';
}




