import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'estudio',
    loadComponent: () =>
      import('./pages/estudio/estudio.component').then(
        (m) => m.EstudioComponent
      ),
  },

  { path: '**', redirectTo: '' },
];
