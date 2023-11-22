import { Component, OnInit } from '@angular/core';
import { ListarMedicoViewModel } from '../models/listarMedico.View-Model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.css']
})
export class ListarMedicoComponent implements OnInit{
medicos: ListarMedicoViewModel[] = [];

constructor(private route: ActivatedRoute){
}
  ngOnInit(): void {
    this.medicos = this.route.snapshot.data['medicos'];
  }
}
