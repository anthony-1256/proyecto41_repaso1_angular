import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { EmpleadosService } from '../../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  trabajador: Personal = {
    id: 0,
    nombre: '',
    edad: 0,
    sueldo: 0,
    antiguedad: 0,
    foto: ""
  };

  mensajeExito: string = "";

  esFememino: boolean = false;

  constructor(
    private servicio: EmpleadosService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    
    /* observable que emite los parametros de la url */
    this.route.paramMap.subscribe( params => {
      
      /* hacer el cast de Number mediante params.get('id') */
      const id = Number(params.get('id'));
      const encontrado = this.servicio.getById(id);
      
      /* traemos del servicio el metodo encontrado */
      if (encontrado !== null) {
        /* operador de sprite {...} genera una copia del objeto de nombre encontrado */
        this.trabajador = {...encontrado};
      }
      else {
        this.mensajeExito = "Empleado no encontrado";
      }
    });
  } // Fin de ngOnInit

  actualizar(): void {
    this.servicio.update(this.trabajador);
    this.mensajeExito = `Empleado con id ${this.trabajador.id} Actualizado!!!`;

    setTimeout( ()=> {
      this.mensajeExito = "";
      this.router.navigate(['/actualizar']);
    }, 3000);
  } // Fin actualizar

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

}