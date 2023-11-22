import { Component } from '@angular/core';
import { ListarConsultaViewModel } from '../models/listarConsulta.View-Model';

@Component({
  selector: 'app-listar-consulta',
  templateUrl: './listar-consulta.component.html',
  styleUrls: ['./listar-consulta.component.css']
})
export class ListarConsultaComponent {
consultas: ListarConsultaViewModel[] = [];
}
