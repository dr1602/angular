import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from './../../models/task.model'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Crear interfaz',
      completed: false,
    },
  ])

  get incompleteTasks() {
    return this.tasks().filter(task => !task.completed);
  }

  get completeTasks() {
    return this.tasks().filter(task => !!task.completed);
  }

  changeHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Enter' && input.value.trim() !== '') {
      const newTask = input.value.trim()
      this.addTask(newTask);
      input.value = '';
    }

  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    }
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number){
    this.tasks.update((task) => task.filter((task, position) => position !== index ))
  }

  changeTaskStatus(index: number) {
    this.tasks.update((tasks) =>
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed }: task
      )
    )
  }

  updateTask(index: number) {
    // a[0] = 'other thing' <- no
    // recuerda es importante que sea un metodo unmutable
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index ) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }
}
