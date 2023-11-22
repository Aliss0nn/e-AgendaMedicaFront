import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormsMedicoViewModel } from "../models/forms-medico.View-Model";
import { Observable, catchError, map, throwError } from "rxjs";
import { ListarMedicoViewModel } from "../models/listarMedico.View-Model";
import { VisualizarMedicoViewModel } from "../models/visualizarMedico.View-Model";

@Injectable()
export class MedicoService{
  constructor(private http: HttpClient) {}

  private endpoint: string = '';

  public inserir(medico: FormsMedicoViewModel){
    return this.http.post<any>(this.endpoint, medico)
    .pipe(
      map(res => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public Editar(id: string, medico: FormsMedicoViewModel){
    return this.http.put<any>(this.endpoint + id, medico)
    .pipe(
      map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public excluir(id: string): Observable<any>{
    return this.http.delete(this.endpoint + id)
    .pipe(
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public SelecionarPorId(id: string): Observable<FormsMedicoViewModel>{
    return this.http.get<any>(this.endpoint + id)
    .pipe(
      map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public selecionarTodos(): Observable<ListarMedicoViewModel[]>{
    return this.http.get<any>(this.endpoint)
    .pipe(
      map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }
  processarErroHttp(err: HttpErrorResponse) {
    let msgErro = '';

    if (err.status == 0)
      msgErro = "Ocorreu um erro ao processar a requisicao";
    else if (err.status == 401)
      msgErro = "O usuario nao esta autorizado! Efetue login e tente novamente";

    else
      msgErro = err.error?.erros[0];

    return throwError(() => new Error(msgErro));
  }

  public selecionarMedicoCompletoPorId(id: string): Observable<VisualizarMedicoViewModel>{
    return this.http.get<any>(this.endpoint + 'visualizacao-completa/' + id)
    .pipe(
      map((res) => res.dados)
    );
  }
}