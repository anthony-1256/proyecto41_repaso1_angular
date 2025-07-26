import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../../empleados.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {

  id!: number;
  empleado!: Personal | null;

  constructor(
    private route: ActivatedRoute,
    private servicio: EmpleadosService,
    /* myHarvest */
    private router: Router
    /* endMyHarvest */
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.empleado = this.servicio.getById(this.id);    
    });
  }

  /* *** myHarvest *** */
  regresar(): void {
    this.router.navigateByUrl('/listar');
  }
  /* *** endMyHarvest *** */
}
444