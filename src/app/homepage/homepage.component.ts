import { Component, Type, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent extends Type implements OnInit {
  constructor() {
    super();
  }
  ngOnInit(): void {}
}
