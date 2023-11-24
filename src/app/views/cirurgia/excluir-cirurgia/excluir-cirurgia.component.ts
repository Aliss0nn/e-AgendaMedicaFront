import { Component, OnInit } from '@angular/core';
import { VisualizarCirurgiaViewModel } from '../models/visualizarCirurgia.View-Model';
import { ListarPacienteViewModel } from '../../paciente/models/listar-paciente.view-Model';
import { ListarMedicoViewModel } from '../../medico/models/listarMedico.View-Model';
import { CirurgiaService } from '../services/cirurgia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../../medico/services/medico.service';

@Component({
  selector: 'app-excluir-cirurgia',
  templateUrl: './excluir-cirurgia.component.html',
  styleUrls: ['./excluir-cirurgia.component.css']
})
export class ExcluirCirurgiaComponent implements OnInit{
cirurgiaVm!: VisualizarCirurgiaViewModel;
idSelecionado: string | null = null;
paciente: ListarPacienteViewModel;
medicos: ListarMedicoViewModel[] = [];

constructor(
  private cirurgiaService: CirurgiaService,
  private medicoService: MedicoService,
  private route: ActivatedRoute,
  private router: Router
){
this.paciente = new ListarPacienteViewModel('','','','')
this.cirurgiaVm = new VisualizarCirurgiaViewModel('','','','',this.paciente,this.medicos)
}

  ngOnInit(): void {
    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if(!this.idSelecionado) return;

    this.cirurgiaService.selecionarCirurgiaCompletaPorId(this.idSelecionado)
    .subscribe((res) => {
      this.cirurgiaVm = res;
    });

    this.medicoService.selecionarTodos().subscribe((res) => {
      this.medicos = res;
     });
  }

  gravar(){
    this.cirurgiaService.excluir(this.idSelecionado!).subscribe((res) => {
      this.router.navigate(['/cirurgias/listar'])
    });
  }
}
