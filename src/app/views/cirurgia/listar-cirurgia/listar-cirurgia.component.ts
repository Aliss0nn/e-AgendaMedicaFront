import { Component } from '@angular/core';
import { ListarCirurgiaViewModel } from '../models/listarCirurgia.View-Model';

@Component({
  selector: 'app-listar-cirurgia',
  templateUrl: './listar-cirurgia.component.html',
  styleUrls: ['./listar-cirurgia.component.css']
})
export class ListarCirurgiaComponent {
cirurgias: ListarCirurgiaViewModel[] = [];
}
