import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJenisDokumenPerjalananComponent } from './edit-jenis-dokumen-perjalanan.component';

describe('EditJenisDokumenPerjalananComponent', () => {
  let component: EditJenisDokumenPerjalananComponent;
  let fixture: ComponentFixture<EditJenisDokumenPerjalananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJenisDokumenPerjalananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJenisDokumenPerjalananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
