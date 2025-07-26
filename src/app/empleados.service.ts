import { Injectable } from '@angular/core';
import plantilla from '../data/plantilla.json';
import {Personal} from './models/personal';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados: Personal[] = plantilla;

  constructor() { }

  ngOnInit(): void {

  }

  getAll(): Personal[] {

    const recuperarDatos: Personal[] = JSON.parse(localStorage.getItem('trabajadores') ?? '[]');

    if (recuperarDatos.length === 0) {
      this.empleados = plantilla;
    } else {
      this.empleados = recuperarDatos;
    }
    return this.empleados;
  }

  getById( idEmp: number ): Personal | null {
    const encontrado = this.empleados.find(emp => emp.id  === idEmp);

    return encontrado || null;
  } // fin metodo getById

  create(objeto: Personal): void {
    this.empleados.push(objeto);

    localStorage.setItem('trabajadores', JSON.stringify(this.empleados));
  } // Fin del metodo create

  update(objeto: Personal): void {
    const index = this.empleados.findIndex(emp => emp.id === objeto.id);
    if (index !== -1) {
      this.empleados[index] = objeto;

      localStorage.setItem('trabajadores', JSON.stringify(this.empleados));
    } // Fin if

  } // Fin update

  delete(idEmp: number): void {
    const index = this.empleados.findIndex(emp => emp.id === idEmp);
    if (index !== -1) {
      this.empleados.splice(index, 1);

      localStorage.setItem('trabajadores', JSON.stringify(this.empleados));
    }
  } //Fin del metodo delete
  
}