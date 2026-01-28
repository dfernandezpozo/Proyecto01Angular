import { Component } from '@angular/core';
import { Carrusel } from '../../app/components/carrusel/carrusel';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Carrusel],
   templateUrl: './home-page.html',
   
  
})
export class HomePage {}
