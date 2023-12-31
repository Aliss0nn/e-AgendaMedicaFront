import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditarCirurgiaComponent } from "./editar-cirurgia/editar-cirurgia.component";
import { ExcluirCirurgiaComponent } from "./excluir-cirurgia/excluir-cirurgia.component";
import { InserirCirurgiaComponent } from "./inserir-cirurgia/inserir-cirurgia.component";
import { ListarCirurgiaComponent } from "./listar-cirurgia/listar-cirurgia.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'listar',
    component: ListarCirurgiaComponent,
  },
  {
    path: 'inserir',
    component: InserirCirurgiaComponent,
  },
  {
    path: 'editar/:id',
    component: EditarCirurgiaComponent,
  },
  {
    path: 'excluir/:id',
    component: ExcluirCirurgiaComponent,
  },
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CirurgiaRoutingModule{
    
  }