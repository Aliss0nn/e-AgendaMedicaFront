import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormsPacienteViewModel } from '../models/forms-paciente.view-model';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListarPacienteViewModel } from '../models/listar-paciente.view-Model';
import { VisualizarPacieneViewModel } from '../models/visualizar-paciente.view-model';

@Injectable()
export class PacienteService{
  private endpoint: string = 'https://localhost:7288/api/pacientes/';
  
  constructor(private http: HttpClient){}

  public inserir(
    paciente: FormsPacienteViewModel
  ): Observable<FormsPacienteViewModel> {
    return this.http
      .post<any>(this.endpoint, paciente)
      .pipe(
        map((res) => res.dados),
        // Interceptar e tratar a mensagem de erro
        catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
      );
  }

  public editar(id: string, paciente: FormsPacienteViewModel){
    return this.http.put<any>(this.endpoint +id, paciente)
    .pipe(
      map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public excluir(id: string): Observable<any>{
    return this.http
    .delete(this.endpoint +id)
    .pipe(
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public selecionarTodos(): Observable<ListarPacienteViewModel[]>{
    return this.http
    .get<any>(this.endpoint)
    .pipe(
      map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public selecionarPorId(id: string) : Observable<FormsPacienteViewModel>{
    return this.http
    .get<any>(this.endpoint + id)
    .pipe(
      map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
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

  public selecionarPacienteCompletoPorId(id:string) : Observable<VisualizarPacieneViewModel>{
    return this.http.get<any>(this.endpoint + 'visualizacao-completa/' + id)
    .pipe(
      map((res) => res.dados)
    );
  }
}