import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitraKolaborasiComponent } from './mitra-kolaborasi.component';

describe('MitraKolaborasiComponent', () => {
  let component: MitraKolaborasiComponent;
  let fixture: ComponentFixture<MitraKolaborasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitraKolaborasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitraKolaborasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
