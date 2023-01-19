import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarClienteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    
   }

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
        index: this.data.i,
        estado: "mod"
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
