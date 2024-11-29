import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  string: string = '';

  recibirDato(dato: string) {
    this.string = dato;
  }
}
