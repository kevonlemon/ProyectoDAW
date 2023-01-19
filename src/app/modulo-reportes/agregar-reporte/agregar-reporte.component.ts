import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agregar-reporte',
  templateUrl: './agregar-reporte.component.html',
  styleUrls: ['./agregar-reporte.component.css']
})
export class AgregarReporteComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarReporteComponent>) { }

  ngOnInit(): void {
    
  }

  //navigationExtras: NavigationExtras={};

  reporteNuevo = new FormGroup({
    asunto: new FormControl('',Validators.required),
    detalles: new FormControl('',Validators.required),
    involucrados: new FormControl('', Validators.required),
    conclusion: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required)
  })


 
  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        asunto: this.reporteNuevo.value.asunto,
        detalles: this.reporteNuevo.value.detalles,
        involucrados: this.reporteNuevo.value.involucrados,
        conclusion: this.reporteNuevo.value.conclusion,
        fecha: this.reporteNuevo.value.fecha,
        estado: "add"
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
