import { Component } from '@angular/core';
import { Tareas } from './models/tareas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tareaSeleccionada: Tareas = new Tareas();

  tareasArray: Tareas[] = [
    //{ id: 1, nombre: "Pagar luz" },

    //{ id: 2, nombre: "Pagar Gas" }
  ];
  agregar() {
    this.tareasArray.push(this.tareaSeleccionada);
    this.tareaSeleccionada = new Tareas();

  }
  tareaTerminada: Tareas = new Tareas();
  borrar(tarea) {
    this.tareasArray = this.tareasArray.filter(registro => registro != tarea);

  }
  borrarToDo(){
    this.tareasArray=[];
  }
}
