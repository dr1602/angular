import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  welcome = 'hola mi primer test.';
  tasks = [
    'Instalar el Angular CLI.',
    'Crear el proyecto.',
    'Crear componentes.',
    'Crear servicio'
  ]
}
