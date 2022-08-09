import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoConsultaComponent } from './empleado-consulta.component';

describe('EmpleadoConsultaComponent', () => {
  let component: EmpleadoConsultaComponent;
  let fixture: ComponentFixture<EmpleadoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
