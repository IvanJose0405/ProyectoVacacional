import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaRegistroComponent } from './factura-registro.component';

describe('FacturaRegistroComponent', () => {
  let component: FacturaRegistroComponent;
  let fixture: ComponentFixture<FacturaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
