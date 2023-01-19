import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable } from 'rxjs';
import {ReporteInterface} from '../interfaces/ReporteInterface';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  Datos!: ReporteInterface[];

  constructor() {
    if(localStorage.getItem('DatosReportes') === null || JSON.parse(localStorage.getItem('DatosReportes')!).length === 0){
      this.Datos = [{
        asunto: 'Libro dañado',      
        detalles: 'El cliente Juan Alvarado se presento en el local debido a que uno de los libros que adquirio tenia paginas rotas.',
        involucrados: 'Juan Alvarado',
        conclusion: 'Se verifico el libro dañado, y se le cambio por una en buen estado',
        fecha: '12/02/2022'
      },
      {
        asunto: 'Libro equivocado',      
        detalles: 'Sele entrego por error un libro de otro pedido al cliente Alberto Torres.',
        involucrados: 'Alberto Torres',
        conclusion: 'Se le cambio el libro por el correcto',
        fecha: '04/08/2022'
      }
    ];
    localStorage.setItem('DatosReportes', JSON.stringify(this.Datos));
    } 

  }

  getReporte() {
    if(localStorage.getItem('DatosReportes') === null) {
      this.Datos = [];
    } else {
      this.Datos = JSON.parse(localStorage.getItem('DatosReportes')!);
    }
    return this.Datos;
  }

  addReporte(dato: ReporteInterface) {
    this.Datos.push(dato);
    let Datos = [];
    if(localStorage.getItem('DatosReportes') === null) {
      Datos = [];
      Datos.push(dato);
      localStorage.setItem('DatosReportes', JSON.stringify(Datos));
    } else {
      Datos = JSON.parse(localStorage.getItem('DatosReportes')!);
      Datos.push(dato); 
      localStorage.setItem('DatosReportes', JSON.stringify(Datos));
    }
  }

}