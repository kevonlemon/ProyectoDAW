import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { EliminarLibroComponent } from './eliminar-libro/eliminar-libro.component';
import { ModificarLibroComponent } from './modificar-libro/modificar-libro.component';
import { InventarioComponent } from './inventario/inventario.component';

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
    AgregarLibroComponent,
    EliminarLibroComponent,
    ModificarLibroComponent,
    InventarioComponent

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
export class ModuloInventarioModule { }
