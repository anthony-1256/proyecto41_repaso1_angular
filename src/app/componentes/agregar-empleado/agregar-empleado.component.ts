import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personal } from '../../models/personal';
import { EmpleadosService } from '../../empleados.service';

@Component({
  selector: 'app-agregar-empleado',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {

  mensajeExito: string = '';

  trabajador: Personal = {
    id: 0,
    nombre: '',
    edad: 0,
    sueldo: 0,
    antiguedad: 0,
    foto: ''
  };

  constructor(private empleadosService: EmpleadosService) {}

  esFememino: boolean = false;

  asignarFotoAleatoria() {
    let genero;
    const id= Math.floor(Math.random() * 100);
    if (this.esFememino) {
      genero = 'women';
    } else {
      genero = 'men';
    }
    this.trabajador.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
  }

  guardar() {
    this.empleadosService.create(this.trabajador);
    this.limpiar();
    console.log('Trabajador: ', this.trabajador);
    console.log('¿Es femenino?: ', this.esFememino);
  }

  limpiar(): void {
    this.trabajador = {
      id: 0,
      nombre: '',
      edad: 0,
      sueldo: 0,
      antiguedad: 0,
      foto: ''
    };

    this.esFememino = false;

    this.mensajeExito = '!Formulario enviado exitosamente¡';

    setTimeout(() => {
      this.mensajeExito = '';      
    }, 3000);
  }
  
}
