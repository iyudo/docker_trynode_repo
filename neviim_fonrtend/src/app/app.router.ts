import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import { KewarganegaraanComponent } from './dataconfig/kewarganegaraan/kewarganegaraan.component';
import { BankComponent } from './dataconfig/bank/bank.component';
import { TambahkwComponent } from './dataconfig/kewarganegaraan/tambahkw/tambahkw.component';
import { TambahbankComponent } from './dataconfig/bank/tambahbank/tambahbank.component';
import { ApprovalComponent } from './approval/approval.component';
import { ApprovalDetailComponent } from './approval/approval-detail/approval-detail.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationDetailComponent } from './notification/notification-detail/notification-detail.component';
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
import { RouterUrl } from './app.var';
import { DpriAlokasiComponent } from './dpri/dpri-alokasi/dpri-alokasi.component';
import { DpriAlokasiDetailComponent } from './dpri/dpri-alokasi/dpri-alokasi-detail/dpri-alokasi-detail.component';
import { DpriPembatalanComponent } from './dpri/dpri-pembatalan/dpri-pembatalan.component';
import { DpriPembayaranComponent } from './dpri/dpri-pembayaran/dpri-pembayaran.component';
import { DpriPencetakanComponent } from './dpri/dpri-pencetakan/dpri-pencetakan.component';
import { DpriPenyerahanComponent } from './dpri/dpri-penyerahan/dpri-penyerahan.component';
import { DpriPenyerahanDetailComponent } from './dpri/dpri-penyerahan/dpri-penyerahan-detail/dpri-penyerahan-detail.component';
import { DpriPermohonanComponent } from './dpri/dpri-permohonan/dpri-permohonan.component';
import { EditJenisDokumenPerjalananComponent } from './dataconfig/jenis-dokumen-perjalanan/edit-jenis-dokumen-perjalanan/edit-jenis-dokumen-perjalanan.component';
import { EditAlasanDokumenPerjalananComponent } from './dataconfig/alasan-dokumen-perjalanan/edit-alasan-dokumen-perjalanan/edit-alasan-dokumen-perjalanan.component';

export const router: Routes = [
    {
        path:'',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path:'dashboard',
        component:DashboardComponent,
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:RouterUrl.approval,
        component:ApprovalComponent,
    },
    {
        path:RouterUrl.approvalDetail,
        component:ApprovalDetailComponent,
    },
    {
        path:RouterUrl.notifikasi,
        component:NotificationComponent,
    },
    {
        path:RouterUrl.notifikasiDetail,
        component:NotificationDetailComponent,
    },
    {
        path:RouterUrl.dpriPermohonan,
        component:DpriPermohonanComponent
    },
    {
        path:RouterUrl.dpriPembayaran,
        component:DpriPembayaranComponent
    },
    {
        path:RouterUrl.dpriAlokasi,
        component:DpriAlokasiComponent
    },
    {
        path:RouterUrl.dpriAlokasiDetail,
        component:DpriAlokasiDetailComponent
    },
    {
        path:RouterUrl.dpriPencetakan,
        component:DpriPencetakanComponent
    },
    {
        path:RouterUrl.dpriPenyerahan,
        component:DpriPenyerahanComponent
    },
    {
        path:RouterUrl.dpriPenyerahanDetail,
        component:DpriPenyerahanDetailComponent
    },
    {
        path:RouterUrl.dpriPembatalan,
        component:DpriPembatalanComponent
    },
    {
        path:RouterUrl.splpPermohonan,
        component:SplpPermohonanComponent
    },
    {
        path:RouterUrl.splpAlokasi,
        component:SplpAlokasiComponent
    },
    {
        path: RouterUrl.jenisPermohonan,
        component:JenisPermohonanComponent
    },
    {
        path:RouterUrl.tambahJenisPermohonan,
        component:TambahJenisPermohonanComponent
    },
    {
        path:RouterUrl.jenisDokumen,
        component:JenisDokumenComponent
    },
    {
        path:RouterUrl.tambahJenisDokumen,
        component:TambahJenisDokumenComponent
    },
    {
        path:RouterUrl.jenisDokumenPerjalanan,
        component:JenisDokumenPerjalananComponent
    },
    {
        path:RouterUrl.tambahJenisDokumenPerjalanan,
        component:TambahJenisDokumenPerjalananComponent
    },
    {
        path:RouterUrl.editJenisDokumenPerjalanan,
        component:EditJenisDokumenPerjalananComponent
    },
    {
        path:RouterUrl.alasanDokumenPerjalanan,
        component:AlasanDokumenPerjalananComponent
    },
    {
        path:RouterUrl.tambahAlasanDokumenPerjalanan,
        component:TambahAlasanDokumenPerjalananComponent
    },
    {
        path:RouterUrl.statusSipil,
        component:StatusSipilComponent
    },
    {
        path:RouterUrl.tambahStatusSipil,
        component:TambahStatusSipilComponent
    },
    {
        path:RouterUrl.kewarganegaraan,
        component:KewarganegaraanComponent
    },
    {
        path:RouterUrl.tambahKewarganegaraan,
        component:TambahkwComponent
    },
    {
        path:RouterUrl.bank,
        component:BankComponent
    },
    {
        path:RouterUrl.tambahBank,
        component:TambahbankComponent
    },
    {
        path:RouterUrl.alasanPembatalan,
        component:AlasanPembatalanComponent
    },
    {
        path:RouterUrl.tambahAlasanPembatalan,
        component:TambahAlasanPembatalanComponent
    },
    {
        path:RouterUrl.persyaratanPengajuan,
        component:PersyaratanPengajuanComponent
    },
    {
        path:RouterUrl.tambahPersyaratanPengajuan,
        component:TambahPersyaratanPengajuanComponent
    },
    {
        path:RouterUrl.masaBerlaku,
        component:MasaBerlakuComponent
    },
    {
        path:RouterUrl.tambahMasaBerlaku,
        component:TambahMasaBerlakuComponent
    },
    {
        path:RouterUrl.manajemenKanim,
        component:ManajemenKanimComponent
    },
    {
        path:RouterUrl.tambahManajemenKanim,
        component:TambahManajemenKanimComponent
    },
    {
        path:RouterUrl.editAlasanDokumenPerjalanan,
        component:EditAlasanDokumenPerjalananComponent
    }


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
