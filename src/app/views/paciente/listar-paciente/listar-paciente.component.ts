import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListarPacienteViewModel } from '../models/listar-paciente.view-Model';
import { PacienteService } from '../services/pacientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit{
pacientes!: Observable<ListarPacienteViewModel[]>;

constructor(private route: ActivatedRoute,
  private servicePaciente: PacienteService){}
ngOnInit(): void {
this.pacientes = this.servicePaciente.selecionarTodos();
}
}