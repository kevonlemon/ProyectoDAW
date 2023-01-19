import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AgregarLibroComponent } from '../agregar-libro/agregar-libro.component';
import { ModificarLibroComponent } from '../modificar-libro/modificar-libro.component';
import { EliminarLibroComponent } from '../eliminar-libro/eliminar-libro.component';
import { LibroInterface } from 'app/interfaces/LibroInterface';
import { LibroService } from 'app/services/libro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  modalOpen = false;
  data: LibroInterface[];

  dataSource: any = [];
  displayedColumns: string[] = ['titulo', 'autor', 'sinopsis', 'editorial', 'precio', 'acciones'];


  nuevoCliente: any;
  nav: any;
  index: number | undefined;
  cedula: string | undefined;

  constructor(private router: Router, private dialog: MatDialog, public libroService: LibroService) {
    this.data = this.libroService.getCliente();
    console.log(this.libroService.getCliente());

    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;



    if (this.nuevoCliente != null && this.nuevoCliente.datosCliente.queryParams.estado === "mod") {

      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.data[this.nuevoCliente.datosCliente.queryParams.index] = this.nuevoCliente.datosCliente.queryParams;

      localStorage.setItem('Datos', JSON.stringify(this.data));

    } else if (this.nuevoCliente != null && this.nuevoCliente.datosCliente.queryParams.estado === "add") {
      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.libroService.addCliente(this.nuevoCliente.datosCliente.queryParams);
      this.nuevoCliente = null;

    } else if (this.nuevoCliente != null && this.nuevoCliente.datosCliente.queryParams.estado === "del") {
      console.log(this.nuevoCliente.datosCliente.queryParams);

      this.data.splice(this.nuevoCliente.datosCliente.queryParams.index, 1);

      localStorage.setItem('Datos', JSON.stringify(this.data));
    }


  };

  ngOnInit() {

    this.data = this.libroService.getCliente();
    this.dataSource = new MatTableDataSource<LibroInterface>(this.data as LibroInterface[]);
    console.log(this.data);
  }

  openDialogAgregar() {
    this.dialog.open(AgregarLibroComponent, {
      width: '50%',
    })
  }

  openDialogModificar(i: number, titulo: string, autor: string, sinopsis: string, editorial: string, precio: number) {
    this.index = i;
    this.dialog.open(ModificarLibroComponent, {
      width: '50%',
      data: { titulo: titulo, autor: autor, sinopsis: sinopsis, editorial: editorial, precio: precio, i: i }

    },)
  }

  openModal() {
    this.modalOpen = true;
  }


  openDialogEliminar(i: number) {
    this.index = i;
    console.log(this.index);

    this.dialog.open(EliminarLibroComponent, {
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
