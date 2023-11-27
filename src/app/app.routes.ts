import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { LabsComponent } from './pages/labs/labs.component'

export const routes: Routes = [
  {
    path: '', // para que vaya a home desde el path inicial
    component: HomeComponent
  },
  {
    path: 'labs',
    component: LabsComponent
  }
];
