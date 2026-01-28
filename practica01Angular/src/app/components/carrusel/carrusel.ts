import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Mirar el CommonModule
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.html',
  styleUrls: ['./carrusel.css'],
  imports:  [CommonModule]
})

// Código principal carrusel

export class Carrusel {
 
  @Input() juegos = [
    { nombre: 'Elden Ring', portada: '/assets/eldenRing.jpg' },
    { nombre: 'God of War', portada: '/assets/gow.jpg' },
    { nombre: 'Deep Rock Galactic', portada: '/assets/drg.jpg' },
    { nombre: 'Prince of Persia', portada: '/assets/pop.jpg' },
    { nombre: 'El varitas', portada: '/assets/hl.jpg' },
    { nombre: 'Umamusume', portada: '/assets/umamu.jpg' },
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.juegos.length) % this.juegos.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.juegos.length;
  }
}
