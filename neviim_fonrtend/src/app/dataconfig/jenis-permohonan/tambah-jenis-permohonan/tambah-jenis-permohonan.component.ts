import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../../app.var';
import {JenisPermohonan} from '../../../_model/dpri/jenis-permohonan';
import{JenisPermohonanService} from '../../../_service/dpri/jenis-permohonan.service';
import {Router} from '@angular/router';
import {User} from '../../../_model/_common/user';

@Component({
  selector: 'app-tambah-jenis-permohonan',
  templateUrl: './tambah-jenis-permohonan.component.html',
  styleUrls: ['./tambah-jenis-permohonan.component.css']
})
export class TambahJenisPermohonanComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  jenisPermohonan : JenisPermohonan = new JenisPermohonan();
  user : User = new User();

  constructor(private router: Router, private jenisPermohonanService :JenisPermohonanService) { }

  ngOnInit() {
    this.loadNewId();
    this.jenisPermohonan.active = false;
  }
  loadNewId(){
    this.jenisPermohonanService.loadNewID().subscribe(output =>{
      this.jenisPermohonan = output;

    }, error =>{
      console.log(error);
    })
  }
  doSave(){
    this.user.userId =("74b59cfe-6ecb-4b76-b396-9f0a09f6510a");
    this.jenisPermohonan.user = this.user;

    this.jenisPermohonan.activeStr = String(this.jenisPermohonan.active);

    this.jenisPermohonanService.save(this.jenisPermohonan).subscribe(success =>{
      console.log(success);
      this.jenisPermohonan = new JenisPermohonan();
      this.router.navigate (['/dataconfig/jenis-permohonan'])
    }, error =>{
       console.log(error);
       console.log("something wrong")
    })
  }
}
