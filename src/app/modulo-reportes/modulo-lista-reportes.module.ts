import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarReporteComponent } from './agregar-reporte/agregar-reporte.component';
import { EliminarReporteComponent } from './eliminar-reporte/eliminar-reporte.component';
import { ModificarReporteComponent } from './modificar-reporte/modificar-reporte.component';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialogRef } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AgregarReporteComponent,
    EliminarReporteComponent,
    ModificarReporteComponent,
    ListaReportesComponent

  ],
  imports: [
    CommonModule,
    MatCardModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
    

  ]
})
export class ModuloListaReportesModule { }
