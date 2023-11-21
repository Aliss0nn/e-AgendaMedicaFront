import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarConsultaComponent } from './listar-consulta/listar-consulta.component';
import { InserirConsultaComponent } from './inserir-consulta/inserir-consulta.component';
import { EditarConsultaComponent } from './editar-consulta/editar-consulta.component';
import { ExcluirConsultaComponent } from './excluir-consulta/excluir-consulta.component';
import { ConsultaRoutingModule } from './consulta.routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarConsultaComponent,
    InserirConsultaComponent,
    EditarConsultaComponent,
    ExcluirConsultaComponent
  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    ReactiveFormsModule
  ],
})
export class ConsultaModule { }
