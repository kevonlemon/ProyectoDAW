import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarReporteComponent } from './modificar-reporte.component';

describe('ModificarReporteComponent', () => {
  let component: ModificarReporteComponent;
  let fixture: ComponentFixture<ModificarReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
