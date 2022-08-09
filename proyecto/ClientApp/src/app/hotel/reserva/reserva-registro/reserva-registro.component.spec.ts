import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaRegistroComponent } from './reserva-registro.component';

describe('ReservaRegistroComponent', () => {
  let component: ReservaRegistroComponent;
  let fixture: ComponentFixture<ReservaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
