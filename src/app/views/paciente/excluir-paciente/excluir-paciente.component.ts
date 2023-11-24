import { Component, OnInit } from '@angular/core';
import { VisualizarPacieneViewModel } from '../models/visualizar-paciente.view-model';
import { PacienteService } from '../services/pacientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toastrService: ToastrService
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
    this.pacienteService.excluir(this.idSelecionado!).subscribe({
      next: () => this.processarSucesso(),
      error: (erro: Error) => this.processarFalha(erro),
    }
    );
  }

  processarSucesso(){
    this.toastrService.success(
      `O paciente foi excluido com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/pacientes/listar'])
  }

  processarFalha(erro: Error){
    this.toastrService.error(erro.message, 'Error');
  }
}