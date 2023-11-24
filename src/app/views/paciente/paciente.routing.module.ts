import { ActivatedRouteSnapshot, ResolveFn, RouterModule, Routes } from "@angular/router";
import { ListarPacienteComponent } from "./listar-paciente/listar-paciente.component";
import { InserirPacienteComponent } from "./inserir-paciente/inserir-paciente.component";
import { EditarPacienteComponent } from "./editar-paciente/editar-paciente.component";
import { ExcluirPacienteComponent } from "./excluir-paciente/excluir-paciente.component";
import { NgModule, inject } from "@angular/core";
import { ListarPacienteViewModel } from "./models/listar-paciente.view-Model";
import { FormsPacienteViewModel } from "./models/forms-paciente.view-model";
import { VisualizarPacieneViewModel } from "./models/visualizar-paciente.view-model";
import { PacienteService } from "./services/pacientes.service";

const listarPacienteResolve: ResolveFn<ListarPacienteViewModel[]> = () => {
  return inject(PacienteService).selecionarTodos();
};

const formsPacienteResolver: ResolveFn<FormsPacienteViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(PacienteService).selecionarPorId(route.paramMap.get('id')!);
};

const visualizarPacienteResolver: ResolveFn<VisualizarPacieneViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(PacienteService).selecionarPacienteCompletoPorId(
    route.paramMap.get('id')!
  );
};

const routes: Routes = [
{
  path: '',
  redirectTo: 'listar',
  pathMatch: 'full',
},
{
  path: 'listar',
  component: ListarPacienteComponent,
  // resolve: { pacientes: listarPacienteResolve },
},
{
  path: 'inserir',
  component: InserirPacienteComponent,
},
{
  path: 'editar/:id',
  component: EditarPacienteComponent,
  // resolve: { paciente: formsPacienteResolver},
},
{
  path: 'excluir/:id',
  component: ExcluirPacienteComponent,
  // resolve: { paciente: visualizarPacienteResolver},
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteRoutingModule{
  
}