import { Component, OnInit } from '@angular/core';
import { TitleConfig, RouterUrl } from '../../app.var';
import { Router } from '@angular/router';
import { AlasanDokPerjalananService } from '../../_service/dpri/alasan-dok-perjalanan.service';
import { AlasanDokPerjalanan } from '../../_model/dpri/alasan-dok-perjalanan';
import { SearchFormat } from '../../_service/_base/search-format';

@Component({
  selector: 'app-alasan-dokumen-perjalanan',
  templateUrl: './alasan-dokumen-perjalanan.component.html',
  styleUrls: ['./alasan-dokumen-perjalanan.component.css']
})
export class AlasanDokumenPerjalananComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  alasanDokPerjalanans: AlasanDokPerjalanan[] = []

  objectSearch: SearchFormat = new SearchFormat()

  alasanDokPerjalanan: AlasanDokPerjalanan = new AlasanDokPerjalanan()

  constructor(
    private router: Router,
    private alasanDokPerjalananService: AlasanDokPerjalananService
  ) { }

  ngOnInit() {
    this.onLoadAdp()
  }

  noNull(any: any) {
    return any == null ? '' : any
  }

  onLoadAdp() {
    let adp = this.alasanDokPerjalanan

    adp.active = Boolean(adp.activeStr)

    this.objectSearch.searchByArr = ['idAlasanDokPerjalanan', 'description', 'active']
    this.objectSearch.keywordArr = [this.noNull(adp.idAlasanDokPerjalanan), this.noNull(adp.description), this.noNull(adp.activeStr)]
    this.objectSearch.orderBy = ''
    this.objectSearch.orderType = ''

    this.alasanDokPerjalananService.loadList(this.objectSearch).subscribe(
      output => {
        console.log(output)
        this.alasanDokPerjalanans = output
        this.alasanDokPerjalanan = new AlasanDokPerjalanan()
      }, error => {
        console.log(error)
      }
    )
  }

  onCheckedAdp(e) {
    if (e.target.checked) {
      console.log("checked")
    }
  }

  onEditPageAdp(alasanDokPerjalanan: AlasanDokPerjalanan) {
    this.alasanDokPerjalananService.selectedAlasanDokPerjalanan = alasanDokPerjalanan
    this.router.navigate(['/' + this.routerUrl.editAlasanDokumenPerjalanan]);
  }

}
