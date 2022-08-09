import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaGestionComponent } from './reserva-gestion.component';

describe('ReservaGestionComponent', () => {
  let component: ReservaGestionComponent;
  let fixture: ComponentFixture<ReservaGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
