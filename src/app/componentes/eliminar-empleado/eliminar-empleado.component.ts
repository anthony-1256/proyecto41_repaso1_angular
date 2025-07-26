import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { EmpleadosService } from '../../empleados.service';

@Component({
  selector: 'app-eliminar-empleado',
  imports: [],
  templateUrl: './eliminar-empleado.component.html',
  styleUrl: './eliminar-empleado.component.css'
})
export class EliminarEmpleadoComponent {

  mensajeEliminado: string = "";
  timeoutId: any;

  empleados: Personal[] = [];

  constructor(private servicio: EmpleadosService) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleados = this.servicio.getAll();
  }

  eliminarEmpleado(id: number) {
    this.servicio.delete(id);
    console.log(`Empleado con id ${id} eliminado`);
    this.cargarEmpleados();
    this.mensajeEliminado = `Empleado con id ${id} eliminado`;

    /* cancelar cualquier temporizador anterior */
    clearTimeout(this.timeoutId);

    /* iniciar nuevo temporizador que dure 3 segundos */
    this.timeoutId = setTimeout( ()=> {
      this.mensajeEliminado="";
    }, 3000);
  }// Fin metodo

} 