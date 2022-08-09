import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cliente2RegistroComponent } from './cliente2-registro.component';

describe('Cliente2RegistroComponent', () => {
  let component: Cliente2RegistroComponent;
  let fixture: ComponentFixture<Cliente2RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cliente2RegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cliente2RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
