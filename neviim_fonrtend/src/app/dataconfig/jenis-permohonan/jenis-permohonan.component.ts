import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../app.var';
import {Router} from '@angular/router';
import {JenisPermohonan} from '../../_model/dpri/jenis-permohonan';
import {JenisPermohonanService} from '../../_service/dpri/jenis-permohonan.service';

@Component({
  selector: 'app-jenis-permohonan',
  templateUrl: './jenis-permohonan.component.html',
  styleUrls: ['./jenis-permohonan.component.css']
})
export class JenisPermohonanComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;
  
  jenisPermohonans : JenisPermohonan[] = [];

  constructor(private router: Router, 
    private jenisPermohonanService : JenisPermohonanService) { }

  ngOnInit() {
    this.loadAllJp();
  }
  loadAllJp(){
    this.jenisPermohonanService.loadAll().subscribe(output =>{
      if(output){
        console.log(output);
         this.jenisPermohonans = output;
      }
    }, error =>{
      console.log(error);
    })
  }
  onCheckedAdp(e) {
    if (e.target.checked) {
      console.log("checked");
    }
  }
}
