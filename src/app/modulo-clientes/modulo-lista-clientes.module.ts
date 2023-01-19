import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { EliminarClienteComponent } from './eliminar-cliente/eliminar-cliente.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

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
    AgregarClienteComponent,
    EliminarClienteComponent,
    ModificarClienteComponent,
    ListaClientesComponent

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
export class ModuloListaClientesModule { }
