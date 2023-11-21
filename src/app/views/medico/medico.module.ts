import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMedicoComponent } from './card-medico/card-medico.component';
import { ListarMedicoComponent } from './listar-medico/listar-medico.component';
import { InserirMedicoComponent } from './inserir-medico/inserir-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { ExcluirMedicoComponent } from './excluir-medico/excluir-medico.component';
import { MedicoRoutingModule } from './medico.routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardMedicoComponent,
    ListarMedicoComponent,
    InserirMedicoComponent,
    EditarMedicoComponent,
    ExcluirMedicoComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule,
    ReactiveFormsModule
  ],
})
export class MedicoModule { }
