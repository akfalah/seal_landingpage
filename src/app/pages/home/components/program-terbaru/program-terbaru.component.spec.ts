import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTerbaruComponent } from './program-terbaru.component';

describe('ProgramTerbaruComponent', () => {
  let component: ProgramTerbaruComponent;
  let fixture: ComponentFixture<ProgramTerbaruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramTerbaruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramTerbaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
