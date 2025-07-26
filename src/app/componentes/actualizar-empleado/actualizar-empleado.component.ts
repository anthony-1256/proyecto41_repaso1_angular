import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { EmpleadosService } from '../../empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-empleado',
  standalone: true,
  imports: [  ],
  templateUrl: './actualizar-empleado.component.html',
  styleUrl: './actualizar-empleado.component.css'
})
export class ActualizarEmpleadoComponent {

  empleados: Personal[] = [];

  constructor(
    private servicio: EmpleadosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* imprime los empleados */
    this.empleados = this.servicio.getAll();
  }

  irAEditar(id: number) {
    this.router.navigate(['/editar', id]);
  }

}