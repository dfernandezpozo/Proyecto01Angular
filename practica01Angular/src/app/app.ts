import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./components/nav/nav";
import { Carrusel } from "./components/carrusel/carrusel";
import { RegisterPage } from '../pages/register-page/register-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Carrusel, RegisterPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica01Angular');
}
