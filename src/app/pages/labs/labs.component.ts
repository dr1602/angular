import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'hola mi primer test.';
  tasks = [
    'Instalar el Angular CLI.',
    'Crear el proyecto.',
    'Crear componentes.',
    'Crear servicio'
  ]
  name = 'David';
  age = 21;
  private edad = 21;

}
