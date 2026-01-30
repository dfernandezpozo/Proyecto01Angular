import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-easter-egg',
  imports: [ReactiveFormsModule],
  templateUrl: './surprise.html',
  styleUrls: ['./surprise.css']
})
export class EasterEggComponent {
  inputControl = new FormControl('');

  
  get showAlfonso(): boolean {
    return this.inputControl.value?.toLowerCase() === 'alfonso';
  }
}
