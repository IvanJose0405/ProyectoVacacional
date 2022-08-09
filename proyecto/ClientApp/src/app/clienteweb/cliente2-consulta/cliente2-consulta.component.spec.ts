import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cliente2ConsultaComponent } from './cliente2-consulta.component';

describe('Cliente2ConsultaComponent', () => {
  let component: Cliente2ConsultaComponent;
  let fixture: ComponentFixture<Cliente2ConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cliente2ConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cliente2ConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
