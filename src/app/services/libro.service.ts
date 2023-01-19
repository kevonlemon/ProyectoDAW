import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable } from 'rxjs';
import {LibroInterface} from '../interfaces/LibroInterface';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LibroService {
  Datos!: LibroInterface[];

  constructor() {
    if(localStorage.getItem('Datos') === null || JSON.parse(localStorage.getItem('Datos')!).length === 0){
      this.Datos = [{
        titulo: 'La profecía del abad negro',      
        autor: 'José María Latorre',
        sinopsis: 'Una aterradora profecía, fuerzas malignas, paisajes brumosos y cementerios abandonados inundan las páginas de esta trepidante novela gótica.',
        editorial: 'Alfaguara',
        precio: 11.55
      },
      {
        titulo: 'Memorias de un gato tonto',      
        autor: 'Luis Blanco Vila',
        sinopsis: 'Io, un gato casero, nos cuenta su vida en una casa de familia numerosa, cinco hijos y el matrimonio. Pero, sobre todo, nos cuenta la vida de esa familia en un momento dramático vivido con enorme intensidad por todos sus miembros.',
        editorial: 'Edebé',
        precio: 23.54
      },
      {
        titulo: 'Oliver Twist',      
        autor: 'Charles Dickens',
        sinopsis: 'Oliver Twist es huérfano y malvive en el entorno más pobre y marginal del Londres de 1830, un mundo donde parece que no hay esperanza.',
        editorial: 'Alianza',
        precio: 18.50
      },
      {
        titulo: 'Crónicas de la Torre I. El Valle de los Lobos',     
        autor: 'Laura Gallego',
        sinopsis: 'Dana creció junto a sus hermanos llevando una vida normal. El día que el Maestro la llevó con él a la Torre, en el Valle de los Lobos, no se imaginaba que su vida cambiaría para siempre y que se convertiría en la depositaria de secretos tan mágicos como antiguos.',
        editorial: 'Ediciones SM',
        precio: 13.25
      },
      {
        titulo: 'Las lágrimas de Shiva',      
        autor: 'César Mallorquí',
        sinopsis: 'En cierta ocasión, hace ya mucho tiempo, vi un fantasma. Sí, un espectro, una aparición, un espíritu; podemos llamarlo como queramos, el caso es que lo vi.',
        editorial: 'Edebé',
        precio: 15.25
      }
    ];
    localStorage.setItem('Datos', JSON.stringify(this.Datos));
    } 

  }

  getCliente() {
    if(localStorage.getItem('Datos') === null) {
      this.Datos = [];
    } else {
      this.Datos = JSON.parse(localStorage.getItem('Datos')!);
    }
    return this.Datos;
  }

  addCliente(dato: LibroInterface) {
    this.Datos.push(dato);
    let Datos = [];
    if(localStorage.getItem('Datos') === null) {
      Datos = [];
      Datos.push(dato);
      localStorage.setItem('Datos', JSON.stringify(Datos));
    } else {
      Datos = JSON.parse(localStorage.getItem('Datos')!);
      Datos.push(dato); 
      localStorage.setItem('Datos', JSON.stringify(Datos));
    }
  }

}