import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule, MatNativeDateModule, MatExpansionModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { KewarganegaraanComponent } from './dataconfig/kewarganegaraan/kewarganegaraan.component';
import { BankComponent } from './dataconfig/bank/bank.component';
import { TambahkwComponent } from './dataconfig/kewarganegaraan/tambahkw/tambahkw.component';
import { TambahbankComponent } from './dataconfig/bank/tambahbank/tambahbank.component';
import { ApprovalComponent } from './approval/approval.component';
import { ApprovalDetailComponent } from './approval/approval-detail/approval-detail.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationDetailComponent } from './notification/notification-detail/notification-detail.component';
import { FormsModule } from '@angular/forms';
// import { PermohonanComponent } from './dpri/permohonan/permohonan.component';
// import { PembayaranComponent } from './dpri/pembayaran/pembayaran.component';
// import { AlokasiComponent } from './dpri/alokasi/alokasi.component';
// import { AlokasiEditComponent } from './dpri/alokasi/alokasi-edit/alokasi-edit.component';
// import { PencetakanComponent } from './dpri/pencetakan/pencetakan.component';
// import { PenyerahanComponent } from './dpri/penyerahan/penyerahan.component';
// import { PenyerahanEditComponent } from './dpri/penyerahan/penyerahan-edit/penyerahan-edit.component';
// import { PembatalanDpriComponent } from './dpri/pembatalan-dpri/pembatalan-dpri.component';
import { AlasanDokumenPerjalananComponent } from './dataconfig/alasan-dokumen-perjalanan/alasan-dokumen-perjalanan.component';
import { TambahAlasanDokumenPerjalananComponent } from './dataconfig/alasan-dokumen-perjalanan/tambah-alasan-dokumen-perjalanan/tambah-alasan-dokumen-perjalanan.component';
import { JenisDokumenComponent } from './dataconfig/jenis-dokumen/jenis-dokumen.component';
import { TambahJenisDokumenComponent } from './dataconfig/jenis-dokumen/tambah-jenis-dokumen/tambah-jenis-dokumen.component';
import { JenisDokumenPerjalananComponent } from './dataconfig/jenis-dokumen-perjalanan/jenis-dokumen-perjalanan.component';
import { TambahJenisDokumenPerjalananComponent } from './dataconfig/jenis-dokumen-perjalanan/tambah-jenis-dokumen-perjalanan/tambah-jenis-dokumen-perjalanan.component';
import { JenisPermohonanComponent } from './dataconfig/jenis-permohonan/jenis-permohonan.component';
import { TambahJenisPermohonanComponent } from './dataconfig/jenis-permohonan/tambah-jenis-permohonan/tambah-jenis-permohonan.component';
import { MasaBerlakuComponent } from './dataconfig/masa-berlaku/masa-berlaku.component';
import { TambahMasaBerlakuComponent } from './dataconfig/masa-berlaku/tambah-masa-berlaku/tambah-masa-berlaku.component';
import { ManajemenKanimComponent } from './dataconfig/manajemen-kanim/manajemen-kanim.component';
import { TambahManajemenKanimComponent } from './dataconfig/manajemen-kanim/tambah-manajemen-kanim/tambah-manajemen-kanim.component';
import { AlasanPembatalanComponent } from './dataconfig/alasan-pembatalan/alasan-pembatalan.component';
import { TambahAlasanPembatalanComponent } from './dataconfig/alasan-pembatalan/tambah-alasan-pembatalan/tambah-alasan-pembatalan.component';
import { PersyaratanPengajuanComponent } from './dataconfig/persyaratan-pengajuan/persyaratan-pengajuan.component';
import { TambahPersyaratanPengajuanComponent } from './dataconfig/persyaratan-pengajuan/tambah-persyaratan-pengajuan/tambah-persyaratan-pengajuan.component';
import { StatusSipilComponent } from './dataconfig/status-sipil/status-sipil.component';
import { TambahStatusSipilComponent } from './dataconfig/status-sipil/tambah-status-sipil/tambah-status-sipil.component';
import { SplpPermohonanComponent } from './splp/splp-permohonan/splp-permohonan.component';
import { SplpAlokasiComponent } from './splp/splp-alokasi/splp-alokasi.component';
import { DpriAlokasiComponent } from './dpri/dpri-alokasi/dpri-alokasi.component';
import { DpriAlokasiDetailComponent } from './dpri/dpri-alokasi/dpri-alokasi-detail/dpri-alokasi-detail.component';
import { DpriPembatalanComponent } from './dpri/dpri-pembatalan/dpri-pembatalan.component';
import { DpriPembayaranComponent } from './dpri/dpri-pembayaran/dpri-pembayaran.component';
import { DpriPencetakanComponent } from './dpri/dpri-pencetakan/dpri-pencetakan.component';
import { DpriPenyerahanComponent } from './dpri/dpri-penyerahan/dpri-penyerahan.component';
import { DpriPenyerahanDetailComponent } from './dpri/dpri-penyerahan/dpri-penyerahan-detail/dpri-penyerahan-detail.component';
import { DpriPermohonanComponent } from './dpri/dpri-permohonan/dpri-permohonan.component';
import { AlasanDokPerjalananService } from './_service/dpri/alasan-dok-perjalanan.service';
import { HttpModule } from '@angular/http';
import { EditAlasanDokumenPerjalananComponent } from './dataconfig/alasan-dokumen-perjalanan/edit-alasan-dokumen-perjalanan/edit-alasan-dokumen-perjalanan.component';




import { JenisDokumenPerjalananService } from '../app/_service/dpri/jenis-dokumen-perjalanan.service';
import { DataTableModule } from "angular2-datatable";
import { EditJenisDokumenPerjalananComponent } from './dataconfig/jenis-dokumen-perjalanan/edit-jenis-dokumen-perjalanan/edit-jenis-dokumen-perjalanan.component';

import {JenisPermohonanService} from '../app/_service/dpri/jenis-permohonan.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    KewarganegaraanComponent,
    BankComponent,
    TambahkwComponent,
    TambahbankComponent,
    ApprovalComponent,
    ApprovalDetailComponent,
    NotificationComponent,
    NotificationDetailComponent,
    AlasanDokumenPerjalananComponent,
    TambahAlasanDokumenPerjalananComponent,
    JenisDokumenComponent,
    TambahJenisDokumenComponent,
    JenisDokumenPerjalananComponent,
    TambahJenisDokumenPerjalananComponent,
    JenisPermohonanComponent,
    TambahJenisPermohonanComponent,
    MasaBerlakuComponent,
    TambahMasaBerlakuComponent,
    ManajemenKanimComponent,
    TambahManajemenKanimComponent,
    AlasanPembatalanComponent,
    TambahAlasanPembatalanComponent,
    PersyaratanPengajuanComponent,
    TambahPersyaratanPengajuanComponent,
    StatusSipilComponent,
    TambahStatusSipilComponent,
    SplpPermohonanComponent,
    SplpAlokasiComponent,
    DpriPermohonanComponent,
    DpriAlokasiComponent,
    DpriAlokasiDetailComponent,
    DpriPembatalanComponent,
    DpriPembayaranComponent,
    DpriPencetakanComponent,
    DpriPenyerahanComponent,
    DpriPenyerahanDetailComponent,
    TambahStatusSipilComponent,
    EditAlasanDokumenPerjalananComponent,
    EditJenisDokumenPerjalananComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    routes,
    HttpModule,
    DataTableModule
  ],
  providers: [
    AlasanDokPerjalananService,
    JenisDokumenPerjalananService,
    JenisPermohonanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
