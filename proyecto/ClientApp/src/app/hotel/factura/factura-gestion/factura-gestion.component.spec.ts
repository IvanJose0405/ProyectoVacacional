import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGestionComponent } from './factura-gestion.component';

describe('FacturaGestionComponent', () => {
  let component: FacturaGestionComponent;
  let fixture: ComponentFixture<FacturaGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
