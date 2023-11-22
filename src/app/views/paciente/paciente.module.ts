import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPacienteComponent } from './listar-paciente/listar-paciente.component';
import { InserirPacienteComponent } from './inserir-paciente/inserir-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { ExcluirPacienteComponent } from './excluir-paciente/excluir-paciente.component';
import { PacienteRoutingModule } from './paciente.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PacienteService } from './services/pacientes.service';
import 'src/app/extensions/form-group.extension';


@NgModule({
  declarations: [
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
  providers: [
    PacienteService
  ],
})
export class PacienteModule { }
