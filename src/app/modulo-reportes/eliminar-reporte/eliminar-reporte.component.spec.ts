import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarReporteComponent } from './eliminar-reporte.component';

describe('EliminarReporteComponent', () => {
  let component: EliminarReporteComponent;
  let fixture: ComponentFixture<EliminarReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
