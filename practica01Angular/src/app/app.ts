import { Component, signal } from '@angular/core';
import { Nav } from "./components/nav/nav";
import { Carrusel } from "./components/carrusel/carrusel";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Nav, Carrusel, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('practica01Angular');
}
