import { Component, OnInit, ViewChild } from '@angular/core';
import { JenisDokumenPerjalananService } from '../../_service/dpri/jenis-dokumen-perjalanan.service';
import { JenisDokumenPerjalanan } from '../../_model/dpri/jenis-dokumen-perjalanan';
import { DataTable } from 'angular2-datatable';
import { TitleConfig, RouterUrl } from '../../app.var';
import {Router} from "@angular/router";

@Component({
  selector: 'app-jenis-dokumen-perjalanan',
  templateUrl: './jenis-dokumen-perjalanan.component.html',
  styleUrls: ['./jenis-dokumen-perjalanan.component.css']
})
export class JenisDokumenPerjalananComponent implements OnInit {

  title = TitleConfig;
  private data: JenisDokumenPerjalanan[] = [];
  private error: any = '';
  activePage: number = 1;
  rowsOnPage: number = 2;
  jenisDokPerjalanan: JenisDokumenPerjalanan[] = [];
  routerUrl = RouterUrl;
  @ViewChild(DataTable) child: DataTable;

  constructor(
    private router: Router,
    private jenisDokumenPerjalananService: JenisDokumenPerjalananService
  ) { }

  ngOnInit() {
    this.loadJenisDokPerjalanan();
  }

  loadJenisDokPerjalanan() {
    this.jenisDokumenPerjalananService.getAllData().subscribe(
      output => {
        this.data = output
        this.child.setPage(this.activePage,this.rowsOnPage);
      },
      error => {
        this.error = <any>error
      }
    )
  }

  onDeleteJenisDokPerjalanan() {
    if(this.jenisDokPerjalanan.length > 0) {
      console.log(this.jenisDokPerjalanan);
      this.jenisDokumenPerjalananService.delete(this.jenisDokPerjalanan).subscribe(
        output => {
          this.loadJenisDokPerjalanan();
          this.jenisDokPerjalanan = [];
        },
        error => {
          console.log(error);
        }
      )
    } else {
      console.log("Empty Data!");
    }
  }

  onEditJdp(jenisDokumenPerjalanan: JenisDokumenPerjalanan) {
    this.jenisDokumenPerjalananService.selectedJenisDokPerjalanan = jenisDokumenPerjalanan;
    this.router.navigate(["/"+this.routerUrl.editJenisDokumenPerjalanan]);
  }

  setNewPage(activePage: number) {
    this.activePage=activePage;
    this.child.setPage(activePage, this.rowsOnPage);
  }

  toggleSelect = function(jenisDokPerjalanan,event){
    this.data.slice(((this.activePage-1)*this.rowsOnPage),(this.activePage*this.rowsOnPage)).forEach(function(item){
      let jDokPerjalanan: JenisDokumenPerjalanan = new JenisDokumenPerjalanan();
      jDokPerjalanan.id = item.id;
      jenisDokPerjalanan.push(jDokPerjalanan);
      item.selected = event.target.checked;
    });
    if(!event.target.checked) {
      jenisDokPerjalanan = [];
    }
  }

  select(item, event) {
    let index = this.getIndexBy("id",event.target.value);
    if (event.target.checked) {
      let jDokPerjalanan: JenisDokumenPerjalanan = new JenisDokumenPerjalanan();
      jDokPerjalanan.id = event.target.value;
      this.jenisDokPerjalanan.push(jDokPerjalanan);
    } else {
      if (index !== -1) {
          this.jenisDokPerjalanan.splice(index, 1);
      }
    }
    item.selected = event.target.checked;
  }

  getIndexBy(name,value) {
    for (var i = 0; i < this.jenisDokPerjalanan.length; i++) {
      if (this.jenisDokPerjalanan[i][name] == value) {
          return i;
      }
    }
    return -1;
  }

}
