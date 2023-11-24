import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarConsultaComponent } from './listar-consulta/listar-consulta.component';
import { InserirConsultaComponent } from './inserir-consulta/inserir-consulta.component';
import { EditarConsultaComponent } from './editar-consulta/editar-consulta.component';
import { ExcluirConsultaComponent } from './excluir-consulta/excluir-consulta.component';
import { ConsultaRoutingModule } from './consulta.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultaService } from './services/consulta.service';
import 'src/app/extensions/form-group.extension';



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
  providers: [
    ConsultaService
  ],
})
export class ConsultaModule { }
