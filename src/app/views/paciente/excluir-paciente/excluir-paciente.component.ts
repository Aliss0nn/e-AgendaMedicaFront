import { Component, OnInit } from '@angular/core';
import { VisualizarPacieneViewModel } from '../models/visualizar-paciente.view-model';
import { PacienteService } from '../services/pacientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-paciente',
  templateUrl: './excluir-paciente.component.html',
  styleUrls: ['./excluir-paciente.component.css']
})
export class ExcluirPacienteComponent implements OnInit {
  pacienteVm: VisualizarPacieneViewModel;
  idSelecionado: string | null = null;

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.pacienteVm = new VisualizarPacieneViewModel('', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if (!this.idSelecionado) return;

    this.pacienteService
      .selecionarPacienteCompletoPorId(this.idSelecionado)
      .subscribe((res) => {
        this.pacienteVm = res;
      });
  }

  gravar() {
    this.pacienteService.excluir(this.idSelecionado!).subscribe((res) => {
      this.router.navigate(['/pacientes', 'listar']);
    });
  }
}
