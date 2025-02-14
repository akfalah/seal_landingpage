import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySealComponent } from './why-seal.component';

describe('WhySealComponent', () => {
  let component: WhySealComponent;
  let fixture: ComponentFixture<WhySealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhySealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhySealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
