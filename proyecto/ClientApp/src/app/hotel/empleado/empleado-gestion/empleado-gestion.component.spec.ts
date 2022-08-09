import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoGestionComponent } from './empleado-gestion.component';

describe('EmpleadoGestionComponent', () => {
  let component: EmpleadoGestionComponent;
  let fixture: ComponentFixture<EmpleadoGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
