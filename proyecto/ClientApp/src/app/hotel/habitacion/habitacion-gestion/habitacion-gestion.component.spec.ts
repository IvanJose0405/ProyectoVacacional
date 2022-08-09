import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionGestionComponent } from './habitacion-gestion.component';

describe('HabitacionGestionComponent', () => {
  let component: HabitacionGestionComponent;
  let fixture: ComponentFixture<HabitacionGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
