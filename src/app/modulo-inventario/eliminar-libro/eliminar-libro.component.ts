import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-libro',
  templateUrl: './eliminar-libro.component.html',
  styleUrls: ['./eliminar-libro.component.css']
})
export class EliminarLibroComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<EliminarLibroComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    
   }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};


  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        index: this.data.i,
        estado: "del"
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
