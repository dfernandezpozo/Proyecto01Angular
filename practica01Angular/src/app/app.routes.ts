import { Routes } from '@angular/router';
import { RegisterPage } from '../pages/register-page/register-page';
import { Lista } from './components/lista/lista';
import { HomePage } from '../pages/home-page/home-page';
export const routes: Routes = [
    { path: '', component: HomePage }, 
    { path: 'registro', component: RegisterPage },
    { path: 'lista', component: Lista },
    
];
