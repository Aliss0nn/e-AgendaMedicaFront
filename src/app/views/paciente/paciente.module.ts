import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPacienteComponent } from './card-paciente/card-paciente.component';
import { ListarPacienteComponent } from './listar-paciente/listar-paciente.component';
import { InserirPacienteComponent } from './inserir-paciente/inserir-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { ExcluirPacienteComponent } from './excluir-paciente/excluir-paciente.component';
import { PacienteRoutingModule } from './paciente.routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardPacienteComponent,
    ListarPacienteComponent,
    InserirPacienteComponent,
    EditarPacienteComponent,
    ExcluirPacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    ReactiveFormsModule
  ],
})
export class PacienteModule { }
