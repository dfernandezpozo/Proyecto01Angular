import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.html',
  styleUrls: ['./carrusel.css'],
  imports:  []
})

// Código principal carrusel

export class Carrusel {
 
  @Input() juegos = [
    { nombre: 'Elden Ring', portada: '/assets/eldenRing.jpg' },
    { nombre: 'God of War', portada: '/assets/gow.jpg' },
    { nombre: 'Deep Rock Galactic', portada: '/assets/drg.jpg' },
    { nombre: 'Prince of Persia', portada: '/assets/pop.jpg' },
    { nombre: 'Howarts Legacy', portada: '/assets/hl.jpg' },
    { nombre: 'Silent hill f', portada: '/assets/sh.jpg' },
   

  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.juegos.length) % this.juegos.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.juegos.length;
  }
}
