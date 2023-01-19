import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './modulo-clientes/lista-clientes/lista-clientes.component';
import { InventarioComponent } from './modulo-inventario/inventario/inventario.component';
import { ListaReportesComponent } from './modulo-reportes/lista-reportes/lista-reportes.component';

const routes: Routes = [
  {path: 'inventario', component:InventarioComponent},
  {path: 'clientes', component:ListaClientesComponent},
  {path: 'reportes', component:ListaReportesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
