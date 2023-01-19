import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarClienteComponent>) { }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  clienteNuevo = new FormGroup({
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('',Validators.required),
    cedula: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required)
  })



  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        nombres: this.clienteNuevo.value.nombres,
        apellidos: this.clienteNuevo.value.apellidos,
        cedula: this.clienteNuevo.value.cedula,
        direccion: this.clienteNuevo.value.direccion,
        edad: this.clienteNuevo.value.edad,
        estado: "add"
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/clientes', objToSend);
    

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
