import { Component, OnInit } from '@angular/core';
import { TitleConfig, RouterUrl } from '../../../app.var';
import { Router } from '@angular/router';
import { JenisDokumenPerjalananService } from '../../../_service/dpri/jenis-dokumen-perjalanan.service';
import { JenisDokumenPerjalanan } from '../../../_model/dpri/jenis-dokumen-perjalanan';
import { User } from '../../../_model/_common/user';

@Component({
  selector: 'app-tambah-jenis-dokumen-perjalanan',
  templateUrl: './tambah-jenis-dokumen-perjalanan.component.html',
  styleUrls: ['./tambah-jenis-dokumen-perjalanan.component.css']
})
export class TambahJenisDokumenPerjalananComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;
  jenisDokPerjalanan: JenisDokumenPerjalanan = new JenisDokumenPerjalanan();
  user: User = new User()

  constructor(
    private router: Router,
    private jenisDokPerjalananService: JenisDokumenPerjalananService
  ) { }

  ngOnInit() {
    this.onLoadNewId()
    this.jenisDokPerjalanan.active = false
  }

  onLoadNewId() {
    this.jenisDokPerjalananService.loadNewID().subscribe(
      output => {
        this.jenisDokPerjalanan = output
      }, error => {
        console.log("error load category\n" + error)
      }
    )
  }

  onJdpSave() {
    //wait for fixing session
    this.user.userId = '74b59cfe-6ecb-4b76-b396-9f0a09f6510a'
    this.jenisDokPerjalanan.user = this.user

    this.jenisDokPerjalanan.activeStr = String(this.jenisDokPerjalanan.active)

    this.jenisDokPerjalananService.save(this.jenisDokPerjalanan)
    .subscribe(
      success => {
        console.log(success)
        this.jenisDokPerjalanan = new JenisDokumenPerjalanan()
        this.router.navigate(['/'+this.routerUrl.jenisDokumenPerjalanan])
      }, error => {
        console.log('Something Wrong')
        console.log(error)
        // this.alertService.error('Item Input Error', true)
      }
    )
  }
}
