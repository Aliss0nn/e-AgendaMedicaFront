import { Component, OnInit } from '@angular/core';
import { ListarConsultaViewModel } from '../models/listarConsulta.View-Model';
import { Observable } from 'rxjs';
import { ConsultaService } from '../services/consulta.service';

@Component({
  selector: 'app-listar-consulta',
  templateUrl: './listar-consulta.component.html',
  styleUrls: ['./listar-consulta.component.css']
})
export class ListarConsultaComponent implements OnInit{
consultas!: Observable<ListarConsultaViewModel[]>;

constructor(private consultaService: ConsultaService){}
ngOnInit(): void {
  this.consultas = this.consultaService.selecionarTodos();
}
}