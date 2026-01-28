import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-easter-egg',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './surprise.html',
  styleUrls: ['./surprise.css']
})
export class EasterEggComponent {
  inputControl = new FormControl('');

  
  get showAlfonso(): boolean {
    return this.inputControl.value?.toLowerCase() === 'alfonso';
  }
}
