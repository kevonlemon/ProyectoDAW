import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import { ModificarClienteComponent } from '../modificar-cliente/modificar-cliente.component';
import { EliminarClienteComponent } from '../eliminar-cliente/eliminar-cliente.component';
import { ClienteInterface } from 'app/interfaces/ClienteInterface';
import { ClienteService } from 'app/services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  data: ClienteInterface[];

  dataSource: any = [];
  displayedColumns: string[] = ['nombres', 'apellidos', 'cedula', 'direccion', 'edad', 'acciones'];


  nuevoCliente: any;
  nav: any;
  index: number | undefined;
  cedula: string | undefined;

  constructor(private router: Router, private dialog: MatDialog, public clienteService: ClienteService) {
    this.data = this.clienteService.getCliente();
    console.log(this.clienteService.getCliente());

    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;



    if (this.nuevoCliente != null && this.nuevoCliente.datosCliente.queryParams.estado === "mod") {

      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.data[this.nuevoCliente.datosCliente.queryParams.index] = this.nuevoCliente.datosCliente.queryParams;

      localStorage.setItem('DatosClientes', JSON.stringify(this.data));

    } else if (this.nuevoCliente != null && this.nuevoCliente.datosCliente.queryParams.estado === "add") {
      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.clienteService.addCliente(this.nuevoCliente.datosCliente.queryParams);

    } else if (this.nuevoCliente != null && this.nuevoCliente.datosCliente.queryParams.estado === "del") {
      console.log(this.nuevoCliente.datosCliente.queryParams);

      this.data.splice(this.nuevoCliente.datosCliente.queryParams.index, 1);

      localStorage.setItem('DatosClientes', JSON.stringify(this.data));
    }


  };

  ngOnInit() {
    
    this.data = this.clienteService.getCliente();
    this.dataSource = new MatTableDataSource<ClienteInterface>(this.data as ClienteInterface[]);
    console.log(this.data);
  }

  openDialogAgregar() {
    this.dialog.open(AgregarClienteComponent, {
      width: '50%',
    })
  }

  openDialogModificar(i: number, nombres: string, apellidos: string, cedula: string, direccion: string, edad: number) {
    this.index = i;
    this.dialog.open(ModificarClienteComponent, {
      width: '50%',
      data: { nombres: nombres, apellidos: apellidos, cedula: cedula, direccion: direccion, edad: edad, i: i }

    },)


  }

  openDialogEliminar(i: number) {
    this.index = i;
    console.log(this.index);

    this.dialog.open(EliminarClienteComponent, {
      width: '50%',
      data: { i: i }
    },)
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
    this.dataSource.filterPredicate = function (data: any, filter: string): boolean {
      return data.nombres.toLowerCase().includes(filter)
    };
  }


}
