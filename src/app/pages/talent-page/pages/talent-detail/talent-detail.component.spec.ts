import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentDetailComponent } from './talent-detail.component';

describe('TalentDetailComponent', () => {
  let component: TalentDetailComponent;
  let fixture: ComponentFixture<TalentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
