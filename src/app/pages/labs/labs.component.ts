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
  disabled = true;
  img = 'https://i.pinimg.com/564x/2a/11/bd/2a11bd2bea14f0e058b0c5fa0779b2a6.jpg';
  loading = 'lazy';

  person = {
    name: 'Dave',
    age: 17,
    avatar: 'https://i.pinimg.com/564x/51/58/8e/51588e6bf466f00571424d3220de3d36.jpg',
  }

}
