import { Injectable } from '@angular/core';
import { BaseService } from '../_base/base-service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { JenisDokumenPerjalanan } from '../../_model/dpri/jenis-dokumen-perjalanan';

let path: string = 'j_dk_perjalanan'

@Injectable()
export class JenisDokumenPerjalananService extends BaseService {
  selectedJenisDokPerjalanan: JenisDokumenPerjalanan;
  constructor(
    http: Http, private http2: Http
  ) {
    super(http,path)
  }

  getAllData() {
    let headers = new Headers({ 'Content-Type': 'application/json'  })
    let options = new RequestOptions({ headers: headers })
    return this.http2.post(this.apiUrl + "list/", {}, options)
      .map(res => res.json())
  }

}