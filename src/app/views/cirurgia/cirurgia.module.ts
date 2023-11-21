import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCirurgiaComponent } from './card-cirurgia/card-cirurgia.component';
import { ListarCirurgiaComponent } from './listar-cirurgia/listar-cirurgia.component';
import { InserirCirurgiaComponent } from './inserir-cirurgia/inserir-cirurgia.component';
import { EditarCirurgiaComponent } from './editar-cirurgia/editar-cirurgia.component';
import { ExcluirCirurgiaComponent } from './excluir-cirurgia/excluir-cirurgia.component';
import { CirurgiaRoutingModule } from './cirurgia.routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardCirurgiaComponent,
    ListarCirurgiaComponent,
    InserirCirurgiaComponent,
    EditarCirurgiaComponent,
    ExcluirCirurgiaComponent
  ],
  imports: [
    CommonModule,
    CirurgiaRoutingModule,
    ReactiveFormsModule
  ],
})
export class CirurgiaModule { }
