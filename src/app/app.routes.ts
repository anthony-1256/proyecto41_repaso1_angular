import { Routes } from '@angular/router';
import { ListarEmpleadosComponent } from './componentes/listar-empleados/listar-empleados.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { EliminarEmpleadoComponent } from './componentes/eliminar-empleado/eliminar-empleado.component';
import { ActualizarEmpleadoComponent } from './componentes/actualizar-empleado/actualizar-empleado.component';
import { EditarComponent } from './componentes/editar/editar.component';

export const routes: Routes = [

    { path: '', redirectTo: 'listar', pathMatch: 'full' },

    { path: 'listar', component: ListarEmpleadosComponent, title: 'Lista de empleados'},

    { path: 'consulta/:id', component: ConsultaComponent },
    
    { path: 'agregar', component: AgregarEmpleadoComponent, title: 'Agregar empleado'},

    { path: 'actualizar', component: ActualizarEmpleadoComponent, title: 'Actualizar empleado'},

    { path: 'editar/:id', component: EditarComponent},

    { path: 'eliminar', component: EliminarEmpleadoComponent, title: 'Eliminar empleado' },
    
    { path: '**', redirectTo: 'listar' },

];