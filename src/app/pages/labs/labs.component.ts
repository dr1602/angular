import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})

export class LabsComponent {
  welcome = 'hola mi primer test.';

  tasks = signal([
    'Instalar el Angular CLI.',
    'Crear el proyecto.',
    'Crear componentes.',
    'Crear servicio'
  ])

  name = signal('David');
  age = 21;
  private edad = 21;
  disabled = true;
  img = 'https://i.pinimg.com/564x/2a/11/bd/2a11bd2bea14f0e058b0c5fa0779b2a6.jpg';
  loading = 'lazy';

  person = signal({
    name: 'David',
    age: 17,
    avatar: 'https://i.pinimg.com/564x/51/58/8e/51588e6bf466f00571424d3220de3d36.jpg',
  })

  colorCtrl = new FormControl();
  colorSubscription: Subscription;

  constructor() {
    this.colorSubscription  = this.colorCtrl.valueChanges.subscribe(value => {
      console.log('Color changed to:', value);
    })
  }

  ngOnDestroy(){
    if(this.colorSubscription) {
      this.colorSubscription.unsubscribe()
      console.log('Color subscription has been unsubscribed.');
    }
  }

  clickHandler() {
    alert('Hola')
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue)
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue, 10),
      }
    })
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        name: newValue,
      }
    })
  }
}
