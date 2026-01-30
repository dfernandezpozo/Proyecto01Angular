import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Este import es por el uso del binding en el html

// Esta interface se tiene que hacer arriba del component o en un archivo 
// services
interface Game {
  name: string;
  platino: boolean;
}

@Component({
  selector: 'app-lista',
  imports: [FormsModule],
  templateUrl: './lista.html',
  styleUrls: ['./lista.css']
})
export class Lista {
  newGame: string = '';
  games: Game[] = [];

  // Añade un juego dentro del array
  addGame() {
    if (!this.newGame.trim()) return;
    this.games.push({ name: this.newGame.trim(), platino: false });
    this.newGame = ''; 
  }
// Elimina el juego
  removeGame(index: number) {
    this.games.splice(index, 1);
  }
// Hace que si el platino es true pase a false y si es false 
// pase a true
  togglePlatino(index: number) {
    this.games[index].platino = !this.games[index].platino;
  }
}
