import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends Type {
  title = 'LeccionAngular';
  constructor() {
    super();
  }
}
