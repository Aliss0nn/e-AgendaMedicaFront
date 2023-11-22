import { Component, OnInit } from '@angular/core';
import { ListarMedicoViewModel } from '../../medico/models/listarMedico.View-Model';
import { ActivatedRoute } from '@angular/router';
import { ListarPacienteViewModel } from '../models/listar-paciente.view-Model';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit{
pacientes: ListarPacienteViewModel[] = [];

constructor(private route: ActivatedRoute){

}
ngOnInit(): void {
  this.pacientes = this.route.snapshot.data['pacientes'];
}
}
