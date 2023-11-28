import { Component, OnInit } from '@angular/core';
import { ListarConsultaViewModel } from '../models/listarConsulta.View-Model';
import { Observable, tap } from 'rxjs';
import { ConsultaService } from '../services/consulta.service';
import { MedicoService } from '../../medico/services/medico.service';
import { PacienteService } from '../../paciente/services/pacientes.service';
import { ListarMedicoViewModel } from '../../medico/models/listarMedico.View-Model';
import { ListarPacienteViewModel } from '../../paciente/models/listar-paciente.view-Model';

@Component({
  selector: 'app-listar-consulta',
  templateUrl: './listar-consulta.component.html',
  styleUrls: ['./listar-consulta.component.css']
})
export class ListarConsultaComponent implements OnInit{
consultas!: Observable<ListarConsultaViewModel[]>;
pacientes: ListarPacienteViewModel[] = [];
medicos: ListarMedicoViewModel[] = [];

constructor(private consultaService: ConsultaService,
  private pacienteService: PacienteService,
  private medicoService: MedicoService,){}
ngOnInit(): void {
  this.pacienteService.selecionarTodos().subscribe(res => {
    this.pacientes = res;
  });

  this.medicoService.selecionarTodos().subscribe(res =>{
    this.medicos = res;
  });

  this.consultas = this.consultaService.selecionarTodos().pipe(tap(x => {
    console.log(x)
  }));

  console.log(this.consultas);
}
}