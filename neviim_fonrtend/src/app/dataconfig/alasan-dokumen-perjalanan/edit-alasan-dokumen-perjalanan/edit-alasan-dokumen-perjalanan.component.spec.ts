import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlasanDokumenPerjalananComponent } from './edit-alasan-dokumen-perjalanan.component';

describe('EditAlasanDokumenPerjalananComponent', () => {
  let component: EditAlasanDokumenPerjalananComponent;
  let fixture: ComponentFixture<EditAlasanDokumenPerjalananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAlasanDokumenPerjalananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAlasanDokumenPerjalananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
