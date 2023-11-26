import { Component, OnInit } from '@angular/core';
import { VisualizarCirurgiaViewModel } from '../../cirurgia/models/visualizarCirurgia.View-Model';
import { ListarPacienteViewModel } from '../../paciente/models/listar-paciente.view-Model';
import { ListarMedicoViewModel } from '../../medico/models/listarMedico.View-Model';
import { ConsultaService } from '../services/consulta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarConsultaViewModel } from '../models/listarConsulta.View-Model';
import { VisualizarConsultaViewModel } from '../models/visualizarConsulta.View-Model';

@Component({
  selector: 'app-excluir-consulta',
  templateUrl: './excluir-consulta.component.html',
  styleUrls: ['./excluir-consulta.component.css']
})
export class ExcluirConsultaComponent implements OnInit{
consultaVm!: VisualizarConsultaViewModel;
idSelecionado: string | null = null;
paciente: ListarPacienteViewModel;
medico: ListarMedicoViewModel;

constructor(
  private consultaService: ConsultaService,
  private route: ActivatedRoute,
  private router: Router
){
  this.paciente = new ListarPacienteViewModel('','','','')
  this.medico = new ListarMedicoViewModel('','','','','','')
  this.consultaVm = new VisualizarConsultaViewModel('','','','',this.paciente,this.medico)
}
  ngOnInit(): void {
   this.idSelecionado = this.route.snapshot.paramMap.get('id');

   if(!this.idSelecionado) return;

   this.consultaService.selecionarConsultaCompletaPorId(this.idSelecionado)
   .subscribe((res) => {
    this.consultaVm = res;
   });
  }

  gravar(){
    this.consultaService.excluir(this.idSelecionado!).subscribe((res) => {
      this.router.navigate(['/consultas/listar'])
    });
  }
}