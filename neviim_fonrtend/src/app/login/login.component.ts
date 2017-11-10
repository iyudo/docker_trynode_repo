import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.document.body.classList.add("login");
    this.document.body.classList.remove("page-container-bg-solid");
    this.document.body.classList.remove("page-header-fixed");
    this.document.body.classList.remove("page-sidebar-closed-hide-logo");    
  }

}
