import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarLibroComponent>) { }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  libroNuevo = new FormGroup({
    titulo: new FormControl('',Validators.required),
    autor: new FormControl('',Validators.required),
    sinopsis: new FormControl('', Validators.required),
    editorial: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required)
  })



  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        titulo: this.libroNuevo.value.titulo,
        autor: this.libroNuevo.value.autor,
        sinopsis: this.libroNuevo.value.sinopsis,
        editorial: this.libroNuevo.value.editorial,
        precio: this.libroNuevo.value.precio,
        estado: "add"
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/inventario', objToSend);
    

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}
