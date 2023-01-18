import { Component, Type, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'ngbd-modal-content',
//   standalone: true,
//   template: `
//   <div class="mimodal">

//     <div class="botoncabecera">
//      <button type="button" class="botonequis" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//      <img class="imagenbotonsalir" src="../../assets/imagenes/cross2.png"/>
//      </button>
//     </div>
//     <div class="modal-cuerpo">
//       <div class="modal-body">
//         <div class="form-group">
//           <label for="exampleInputEmail1" class="form-label mt-4">Usuario</label>
//           <input type="text" name="usuario" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Usuario" #usuario>
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1" class="form-label mt-4">Contraseña</label>
//           <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Ingrese su Contraseña" #password >
//         </div>
//       </div>
//     </div>
// 		<div class="modal-footer">
// 			<button type="button" class="btn btn-light" (click)="activeModal.close('Close click')">Iniciar Sesión</button>
//     </div>

//   </div>
// 	`,
// })
// export class NgbdModalContent {
//   constructor(public activeModal: NgbActiveModal) { }
// }

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent extends Type implements OnInit {
  dataUsuario = new UsersComponent();
  constructor(private router: Router, public modal: NgbModal) {
    super();
  }
  // open() {
  //   const modalRef = this.modalService.open(NgbdModalContent, { centered: true, size: "lg" });
  //   modalRef.componentInstance.name = 'World';
  // }
  ngOnInit(): void {
  }

  onSubmit(usuario: String, password: String) {
    if (usuario == this.dataUsuario.dataUsuario && password == '12345') {
      this.modal.dismissAll()
      this.router.navigate(['/home']);
    } else {
      alert('Error en las credenciales');
    }
  }
}
