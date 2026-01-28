import { Component } from '@angular/core';
import { Carrusel } from '../../app/components/carrusel/carrusel';
import { EasterEggComponent } from "../../app/components/surprise/surprise";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Carrusel, EasterEggComponent],
   templateUrl: './home-page.html',
   
  
})
export class HomePage {}
