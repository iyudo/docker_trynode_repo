import { Component, OnInit } from '@angular/core';
import { AlasanDokPerjalanan } from '../../../_model/dpri/alasan-dok-perjalanan';
import { User } from '../../../_model/_common/user';
import { RouterUrl, TitleConfig } from '../../../app.var';
import { Router } from '@angular/router';
import { AlasanDokPerjalananService } from '../../../_service/dpri/alasan-dok-perjalanan.service';

@Component({
  selector: 'app-edit-alasan-dokumen-perjalanan',
  templateUrl: './edit-alasan-dokumen-perjalanan.component.html',
  styleUrls: ['./edit-alasan-dokumen-perjalanan.component.css']
})
export class EditAlasanDokumenPerjalananComponent implements OnInit {

  title = TitleConfig;
  alasanDokPerjalanan: AlasanDokPerjalanan = new AlasanDokPerjalanan()
  user: User = new User()
  
  routerUrl = RouterUrl;
  
  constructor(
    private router: Router,
    private alasanDokPerjalananService: AlasanDokPerjalananService,
  ) {}

  ngOnInit() {
    let adp = this.alasanDokPerjalananService.selectedAlasanDokPerjalanan
    this.onFindOne(adp)
  }

  onFindOne(adp: AlasanDokPerjalanan) {
    this.alasanDokPerjalananService.findOne(adp).subscribe(
      output => {
        console.log("horey")
        this.alasanDokPerjalanan = output
      }, error => {
        console.log(error)
        this.router.navigate(['/' + this.routerUrl.alasanDokumenPerjalanan])
      }
    )
  }

  onEditAdp() {
    this.alasanDokPerjalanan.activeStr = String(this.alasanDokPerjalanan.active)
    this.alasanDokPerjalananService.edit(this.alasanDokPerjalanan).subscribe(
      output => {
        console.log(output)
        this.alasanDokPerjalanan = new AlasanDokPerjalanan()
        this.router.navigate(['/' + this.routerUrl.alasanDokumenPerjalanan])
      }, error => {
        console.log(error)
      }
    )
  }

}
