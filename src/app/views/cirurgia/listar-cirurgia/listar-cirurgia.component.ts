import { Component, OnInit } from '@angular/core';
import { ListarCirurgiaViewModel } from '../models/listarCirurgia.View-Model';
import { Observable, map, tap } from 'rxjs';
import { CirurgiaService } from '../services/cirurgia.service';

@Component({
  selector: 'app-listar-cirurgia',
  templateUrl: './listar-cirurgia.component.html',
  styleUrls: ['./listar-cirurgia.component.css']
})
export class ListarCirurgiaComponent  {
cirurgias!: Observable<ListarCirurgiaViewModel[]>;

constructor(private cirurgiaService: CirurgiaService){}
  ngOnInit(): void {
    this.cirurgias = this.cirurgiaService.selecionarTodos().pipe(tap(x => {
      console.log(x)
    }));
  }
}