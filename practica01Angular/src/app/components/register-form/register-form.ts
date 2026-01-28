import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrls: ['./register-form.css'],
 
})
export class Registro {
  
  userForm: FormGroup;

  
  username: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor() {
   
    this.username = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.confirmPassword = new FormControl('', Validators.required);

    
    this.userForm = new FormGroup(
      {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      },
      { validators: this.passwordsMatchValidator } 
    );
  }

  // Verificamos que las contraseñas sean iguales , en el caso de que 
  // no lo sean devolverá true.
  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const group = control as FormGroup;
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { notMatching: true };
  }

  
  handleSubmit() {
    if (this.userForm.valid) {
      console.log('Usuario registrado:', this.userForm.value);
      
      this.userForm.reset();
    }
  }

  
}
