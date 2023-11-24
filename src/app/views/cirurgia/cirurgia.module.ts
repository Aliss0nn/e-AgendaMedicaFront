import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCirurgiaComponent } from './listar-cirurgia/listar-cirurgia.component';
import { InserirCirurgiaComponent } from './inserir-cirurgia/inserir-cirurgia.component';
import { EditarCirurgiaComponent } from './editar-cirurgia/editar-cirurgia.component';
import { ExcluirCirurgiaComponent } from './excluir-cirurgia/excluir-cirurgia.component';
import { CirurgiaRoutingModule } from './cirurgia.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CirurgiaService } from './services/cirurgia.service';
import 'src/app/extensions/form-group.extension';



@NgModule({
  declarations: [
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
  providers: [
    CirurgiaService
  ],
})
export class CirurgiaModule { }
