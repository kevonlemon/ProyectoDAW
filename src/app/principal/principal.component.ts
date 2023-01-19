import { Component, Type, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { Router } from '@angular/router';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
