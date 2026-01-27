import { Component } from '@angular/core';
import { Nav } from '../../app/components/nav/nav';
import { Registro } from '../../app/components/register-form/register-form';
@Component({
  selector: 'app-register-page',
  imports: [Nav, Registro],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

}
