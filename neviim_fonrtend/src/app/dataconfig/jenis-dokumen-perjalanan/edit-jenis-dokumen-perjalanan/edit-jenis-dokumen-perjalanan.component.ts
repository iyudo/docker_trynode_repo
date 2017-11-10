import { Component, OnInit } from '@angular/core';
import { JenisDokumenPerjalanan } from '../../../_model/dpri/jenis-dokumen-perjalanan';
import { User } from '../../../_model/_common/user';
import { RouterUrl } from '../../../app.var';
import { Router } from '@angular/router';
import { JenisDokumenPerjalananService } from '../../../_service/dpri/jenis-dokumen-perjalanan.service';

@Component({
  selector: 'app-edit-jenis-dokumen-perjalanan',
  templateUrl: './edit-jenis-dokumen-perjalanan.component.html',
  styleUrls: ['./edit-jenis-dokumen-perjalanan.component.css']
})
export class EditJenisDokumenPerjalananComponent implements OnInit {
  
  jenisDokPerjalanan: JenisDokumenPerjalanan = new JenisDokumenPerjalanan()
  user: User = new User()
  
  routerUrl = RouterUrl;
  
  constructor(
    private router: Router,
    private jenisDokPerjalananService: JenisDokumenPerjalananService,
  ) {}

  ngOnInit() {
    let jdp = this.jenisDokPerjalananService.selectedJenisDokPerjalanan
    // this.onFindOne(jdp)
  }

  onFindOne() {
    
  }
}
