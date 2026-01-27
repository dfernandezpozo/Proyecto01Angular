import { Routes } from '@angular/router';

import { Registro } from './components/register-form/register-form';
import { ListaJuegos } from '../pages/lista-juegos/lista-juegos';
import { Carrusel } from './components/carrusel/carrusel';
export const routes: Routes = [
    
    { path: 'registro', component: Registro },
    { path: 'ListaJuegos', component: ListaJuegos },
    { path: 'Carrusel', component: Carrusel }
];
