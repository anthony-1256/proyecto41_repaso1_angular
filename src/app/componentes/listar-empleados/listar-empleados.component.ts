import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmpleadosService } from '../../empleados.service';
import { Personal } from '../../models/personal';

@Component({
  selector: 'app-listar-empleados',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './listar-empleados.component.html',
  styleUrl: './listar-empleados.component.css'
})
export class ListarEmpleadosComponent {

  misEmpleados!: Personal[];

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.misEmpleados = this.empleadosService.getAll();
    console.log(this.empleadosService);
    
    let emp;
    emp = this.empleadosService.getById(4114);
    console.log(emp);
    emp = this.empleadosService.getById(1596);
    console.log(emp);

    /* this.empleadosService.delete(4114); */
    /* this.empleadosService.delete(1794); */
    
  }

}