import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-reporte',
  templateUrl: './eliminar-reporte.component.html',
  styleUrls: ['./eliminar-reporte.component.css']
})
export class EliminarReporteComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<EliminarReporteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    
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
    this.redirectTo('/reportes', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosReporte: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}
