import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Muy importante el RouterLink

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

}
