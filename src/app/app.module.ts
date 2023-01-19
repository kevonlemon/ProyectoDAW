// app.module.ts

import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModuloInventarioModule } from './modulo-inventario/modulo-inventario.module';
import { ModuloListaClientesModule } from './modulo-clientes/modulo-lista-clientes.module';
import { ModuloListaReportesModule } from './modulo-reportes/modulo-lista-reportes.module';
import { ModalGeneralComponent } from './modal-general/modal-general.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomepageComponent, UsersComponent, PrincipalComponent, ModalGeneralComponent],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule, NgbModule,
    ModuloInventarioModule, ModuloListaClientesModule, ModuloListaReportesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
