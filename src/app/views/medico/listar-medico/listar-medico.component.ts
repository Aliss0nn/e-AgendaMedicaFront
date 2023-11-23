import { Component, OnInit } from '@angular/core';
import { ListarMedicoViewModel } from '../models/listarMedico.View-Model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.css']
})
export class ListarMedicoComponent implements OnInit{
medicos!: Observable<ListarMedicoViewModel[]>;

constructor(private route: ActivatedRoute,
  private medicoService: MedicoService){
}
  ngOnInit(): void {
this.medicos = this.medicoService.selecionarTodos();
  }
}
