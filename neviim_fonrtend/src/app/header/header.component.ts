import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends AppComponent implements OnInit {

  route:string;

  constructor(@Inject(DOCUMENT) private document: Document, location:Location, router:Router) { 
    super(location, router);

  }

  ngOnInit() {
    this.document.body.classList.remove("login");
    this.document.body.classList.add("page-container-bg-solid");
    this.document.body.classList.add("page-header-fixed");
    this.document.body.classList.add("page-sidebar-closed-hide-logo");
  }

  headerMenu(){
    window.location.reload();
  }
  

}
