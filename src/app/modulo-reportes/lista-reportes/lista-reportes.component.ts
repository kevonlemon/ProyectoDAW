import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AgregarReporteComponent } from '../agregar-reporte/agregar-reporte.component';
import { ModificarReporteComponent } from '../modificar-reporte/modificar-reporte.component';
import { EliminarReporteComponent } from '../eliminar-reporte/eliminar-reporte.component';
import { ReporteInterface } from 'app/interfaces/ReporteInterface';
import { ReporteService } from 'app/services/reporte.service';

@Component({
  selector: 'app-lista-reportes',
  templateUrl: './lista-reportes.component.html',
  styleUrls: ['./lista-reportes.component.css']
})
export class ListaReportesComponent implements OnInit {
  data: ReporteInterface[];
  dataSource: any = [];
  displayedColumns: string[] = ['asunto', 'detalles', 'involucrados', 'conclusion', 'fecha', 'acciones'];

  nuevoReporte: any;
  nav: any;
  index: number | undefined;
  cedula: string | undefined;

  constructor(private router: Router, private dialog: MatDialog, public reporteService: ReporteService) {
    this.data = this.reporteService.getReporte();
    console.log(this.reporteService.getReporte());
    this.nav = this.router.getCurrentNavigation();
    this.nuevoReporte = this.nav.extras.state;

    if (this.nuevoReporte != null && this.nuevoReporte.datosReporte.queryParams.estado === "mod") {
      console.log(this.nuevoReporte.datosReporte.queryParams);
      this.data[this.nuevoReporte.datosReporte.queryParams.index] = this.nuevoReporte.datosReporte.queryParams;
      localStorage.setItem('DatosReportes', JSON.stringify(this.data));

    } else if (this.nuevoReporte != null && this.nuevoReporte.datosReporte.queryParams.estado === "add") {
      console.log(this.nuevoReporte.datosReporte.queryParams);
      this.reporteService.addReporte(this.nuevoReporte.datosReporte.queryParams);

    } else if (this.nuevoReporte != null && this.nuevoReporte.datosReporte.queryParams.estado === "del") {
      console.log(this.nuevoReporte.datosReporte.queryParams);
      this.data.splice(this.nuevoReporte.datosReporte.queryParams.index, 1);

      localStorage.setItem('DatosReportes', JSON.stringify(this.data));
    }
  };

  ngOnInit() {
    this.data = this.reporteService.getReporte();
    this.dataSource = new MatTableDataSource<ReporteInterface>(this.data as ReporteInterface[]);
    console.log(this.data);
  }

  openDialogAgregar() {
    this.dialog.open(AgregarReporteComponent, {
      width: '50%',
    })
  }

  openDialogModificar(i: number, asunto: string, detalles: string, involucrados: string, conclusion: string, fecha: string) {
    this.index = i;
    this.dialog.open(ModificarReporteComponent, {
      width: '50%',
      data: { asunto: asunto, detalles: detalles, involucrados: involucrados, conclusion: conclusion, fecha: fecha, i: i }

    },)


  }

  openDialogEliminar(i: number) {
    this.index = i;
    console.log(this.index);

    this.dialog.open(EliminarReporteComponent, {
      width: '50%',
      data: { i: i }
    },)
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
    this.dataSource.filterPredicate = function (data: any, filter: string): boolean {
      return data.titulo.toLowerCase().includes(filter)
    };
  }



}
