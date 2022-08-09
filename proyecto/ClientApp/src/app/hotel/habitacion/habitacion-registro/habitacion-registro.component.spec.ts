import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionRegistroComponent } from './habitacion-registro.component';

describe('HabitacionRegistroComponent', () => {
  let component: HabitacionRegistroComponent;
  let fixture: ComponentFixture<HabitacionRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
