import { Component, Type } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends Type {
  dataUsuario = new UsersComponent();

  constructor(private router: Router, private modal: NgbModal) {
    super();
  }
  onSubmit(usuario: String, password: String) {
    if (usuario == this.dataUsuario.dataUsuario && password == '12345') {
      this.router.navigate(['/home']);
    } else {
      alert('Error en las credenciales');
    }
  }
}
