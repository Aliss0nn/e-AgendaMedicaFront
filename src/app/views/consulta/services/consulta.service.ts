import { Injectable } from "@angular/core";
import { FormsConsultaViewModel } from "../models/formsConsulta.View-Model";
import { ListarConsultaViewModel } from "../models/listarConsulta.View-Model";
import { VisualizarConsultaViewModel } from "../models/visualizarConsulta.View-Model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError, Observable, throwError } from "rxjs";

@Injectable()
export class ConsultaService{
  constructor(private http: HttpClient) {}

  private endpoint: string = 'https://localhost:7288/api/consultas';

  public inserir(consulta: FormsConsultaViewModel){
    return this.http.post<any>(this.endpoint, consulta)
    .pipe(
      map(res => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public Editar(id: string, consulta: FormsConsultaViewModel){
    return this.http.put<any>(this.endpoint + id, consulta)
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

  public SelecionarPorId(id: string): Observable<FormsConsultaViewModel>{
    return this.http.get<any>(this.endpoint + id)
    .pipe(
      map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    );
  }

  public selecionarTodos(): Observable<ListarConsultaViewModel[]>{
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

  public selecionarConsultaCompletaPorId(
    id: string
  ): Observable<VisualizarConsultaViewModel> {
    return this.http
      .get<any>(
        this.endpoint + 'visualizacao-completa/' + id,
      )
      .pipe(map((res) => res.dados));
  }
}