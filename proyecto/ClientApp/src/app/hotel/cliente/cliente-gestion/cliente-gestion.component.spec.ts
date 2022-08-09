import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteGestionComponent } from './cliente-gestion.component';

describe('ClienteGestionComponent', () => {
  let component: ClienteGestionComponent;
  let fixture: ComponentFixture<ClienteGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
