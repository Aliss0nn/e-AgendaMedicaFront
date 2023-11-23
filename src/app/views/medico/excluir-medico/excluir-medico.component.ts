import { Component, OnInit } from '@angular/core';
import { VisualizarMedicoViewModel } from '../models/visualizarMedico.View-Model';
import { MedicoService } from '../services/medico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-medico',
  templateUrl: './excluir-medico.component.html',
  styleUrls: ['./excluir-medico.component.css']
})
export class ExcluirMedicoComponent implements OnInit {
medicoVm: VisualizarMedicoViewModel;
idSelecionado: string | null = null;

constructor(
  private medicoService: MedicoService,
  private route: ActivatedRoute,
  private router: Router
){
this.medicoVm = new VisualizarMedicoViewModel('','','','','','');
}

  ngOnInit(): void {
    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if(!this.idSelecionado) return;

    this.medicoService.selecionarMedicoCompletoPorId(this.idSelecionado)
    .subscribe((res) => {
      this.medicoVm = res;
    });
  }

  gravar(){
    this.medicoService.excluir(this.idSelecionado!).subscribe((res) =>{
      this.router.navigate(['/medicos/listar']);
    });
  }
}