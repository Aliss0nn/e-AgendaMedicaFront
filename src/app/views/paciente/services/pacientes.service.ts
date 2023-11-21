import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormsPacienteViewModel } from '../models/forms-paciente.view-model';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PacienteService{
  private endpoint: string = 'https://localhost:7288';

  constructor(private http: HttpClient){}

  public inserir(
    paciente: FormsPacienteViewModel
  ): Observable<FormsPacienteViewModel> {
    return this.http
      .post<any>(this.endpoint, paciente)
      .pipe(
        map((res) => res.dados),
        // Interceptar e tratar a mensagem de erro
        // catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
      );
  }

  private processarErroHttp(erro: HttpErrorResponse) {
    let mensagemErro = '';

    if (erro.status == 0)
      mensagemErro = 'Ocorreu um erro ao processar a requisição.';
    if (erro.status == 401)
      mensagemErro =
        'O usuário não está autorizado. Efetue login e tente novamente.';
    else mensagemErro = erro.error?.erros[0];

    return throwError(() => new Error(mensagemErro));
  }
}