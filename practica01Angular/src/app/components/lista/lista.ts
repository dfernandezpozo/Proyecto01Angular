import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Game {
  name: string;
  platino: boolean;
}

@Component({
  selector: 'app-lista',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.html',
  styleUrls: ['./lista.css']
})
export class Lista {
  newGame: string = '';
  games: Game[] = [];

  addGame() {
    if (!this.newGame.trim()) return;

    this.games.push({ name: this.newGame.trim(), platino: false });
    this.newGame = ''; 
  }

  removeGame(index: number) {
    this.games.splice(index, 1);
  }

  togglePlatino(index: number) {
    this.games[index].platino = !this.games[index].platino;
  }
}
