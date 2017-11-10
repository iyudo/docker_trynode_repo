import { Injectable } from '@angular/core';
import { BaseService } from '../_base/base-service';
import { Http } from '@angular/http';
import { AlasanDokPerjalanan } from '../../_model/dpri/alasan-dok-perjalanan';

let path: string = 'alasan-dok-perjalanan'

@Injectable()
export class AlasanDokPerjalananService extends BaseService {

  selectedAlasanDokPerjalanan: AlasanDokPerjalanan = new AlasanDokPerjalanan()

  constructor(
    baseHttp: Http
  ) {
    super(baseHttp, path);
  }

}
