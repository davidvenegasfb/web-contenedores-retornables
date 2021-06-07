import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBajaComponent } from './ver-baja.component';

describe('VerBajaComponent', () => {
  let component: VerBajaComponent;
  let fixture: ComponentFixture<VerBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerBajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
