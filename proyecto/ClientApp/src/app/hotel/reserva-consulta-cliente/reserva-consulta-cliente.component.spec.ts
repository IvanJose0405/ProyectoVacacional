import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaConsultaClienteComponent } from './reserva-consulta-cliente.component';

describe('ReservaConsultaClienteComponent', () => {
  let component: ReservaConsultaClienteComponent;
  let fixture: ComponentFixture<ReservaConsultaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaConsultaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaConsultaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
