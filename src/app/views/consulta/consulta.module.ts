import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardConsultaComponent } from './card-consulta/card-consulta.component';
import { ListarConsultaComponent } from './listar-consulta/listar-consulta.component';
import { InserirConsultaComponent } from './inserir-consulta/inserir-consulta.component';
import { EditarConsultaComponent } from './editar-consulta/editar-consulta.component';
import { ExcluirConsultaComponent } from './excluir-consulta/excluir-consulta.component';



@NgModule({
  declarations: [
    CardConsultaComponent,
    ListarConsultaComponent,
    InserirConsultaComponent,
    EditarConsultaComponent,
    ExcluirConsultaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConsultaModule { }
