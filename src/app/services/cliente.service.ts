import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable } from 'rxjs';
import {ClienteInterface} from '../interfaces/ClienteInterface';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  Datos!: ClienteInterface[];

  constructor() {
    if(localStorage.getItem('DatosClientes') === null || JSON.parse(localStorage.getItem('DatosClientes')!).length === 0){
      this.Datos = [{
        nombres: 'Juan Antonio',      
        apellidos: 'Perez Ochoa',
        cedula: '1234567890',
        direccion: 'Guayaquil',
        edad: 22
      },
      {
        nombres: 'Maria Angela',      
        apellidos: 'Pinargote Portilla',
        cedula: '1234567890',
        direccion: 'Quito',
        edad: 35
      },
      {
        nombres: 'Isabel Mikaela',      
        apellidos: 'Mendoza Carrillo',
        cedula: '1234567890',
        direccion: 'Ambato',
        edad: 24
      },
      {
        nombres: 'Michael Javier',      
        apellidos: 'Alvarado Perez',
        cedula: '1234567890',
        direccion: 'Cuenca',
        edad: 29
      }
    ];
    localStorage.setItem('DatosClientes', JSON.stringify(this.Datos));
    } 

  }

  getCliente() {
    if(localStorage.getItem('DatosClientes') === null) {
      this.Datos = [];
    } else {
      this.Datos = JSON.parse(localStorage.getItem('DatosClientes')!);
    }
    return this.Datos;
  }

  addCliente(dato: ClienteInterface) {
    this.Datos.push(dato);
    let Datos = [];
    if(localStorage.getItem('DatosClientes') === null) {
      Datos = [];
      Datos.push(dato);
      localStorage.setItem('DatosClientes', JSON.stringify(Datos));
    } else {
      Datos = JSON.parse(localStorage.getItem('DatosClientes')!);
      Datos.push(dato); 
      localStorage.setItem('DatosClientes', JSON.stringify(Datos));
    }
  }

}