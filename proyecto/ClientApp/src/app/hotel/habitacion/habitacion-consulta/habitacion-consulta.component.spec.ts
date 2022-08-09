import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionConsultaComponent } from './habitacion-consulta.component';

describe('HabitacionConsultaComponent', () => {
  let component: HabitacionConsultaComponent;
  let fixture: ComponentFixture<HabitacionConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
