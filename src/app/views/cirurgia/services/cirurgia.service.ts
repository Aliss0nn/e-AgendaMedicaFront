import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { ListarCirurgiaViewModel } from "../models/listarCirurgia.View-Model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { FormsCirurgiaViewModel } from "../models/formsCirurgia.View-Model";
import { VisualizarCirurgiaViewModel } from "../models/visualizarCirurgia.View-Model";

@Injectable()
export class CirurgiaService{
  constructor(private http: HttpClient){}

  private endpoint: string = 'https://localhost:7288/api/cirurgias/';

  public inserir(cirurgia: FormsCirurgiaViewModel){
    return this.http.post<any>(this.endpoint,cirurgia)
    .pipe(
      map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public editar(id: string, cirurgia: FormsCirurgiaViewModel){
    return this.http.put<any>(this.endpoint + id, cirurgia)
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

  public selecionarTodos(): Observable<ListarCirurgiaViewModel[]>{
    return this.http.get<any>(this.endpoint)
    .pipe(
      map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public selecionarPorId(id: string): Observable<FormsCirurgiaViewModel>{
    return this.http.get<any>(this.endpoint + id)
    .pipe(
      map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public selecionarCirurgiaCompletaPorId(
    id: string
  ): Observable<VisualizarCirurgiaViewModel> {
    return this.http
      .get<any>(
        this.endpoint + 'visualizacao-completa/' + id,
      )
      .pipe(map((res) => res.dados));
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
}