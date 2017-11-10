import {Injectable} from '@angular/core'
import {Http, RequestOptions, Headers} from '@angular/http';
import { BaseService } from '../_base/base-service';
import {environment} from '../../../environments/environment'

let path : string ='jenisPermohonan';

let apiUrl = environment.apiUrl;

@Injectable()
export class JenisPermohonanService extends BaseService  {
  constructor(http: Http){
    super(http, path);
}
}