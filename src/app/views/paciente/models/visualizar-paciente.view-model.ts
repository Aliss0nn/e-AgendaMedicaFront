export class VisualizarPacieneViewModel{
  id: string;
  nome: string;
  telefone: string;
  email: string;
  cpf: string;
  cep: string;

  constructor(id: string, nome: string, telefone: string, email: string, cpf: string, cep: string){
    this.id = id;
    this.nome = nome;
    this.telefone = telefone
    this.email = email;
    this.cpf = cpf;
    this.cep = cep;
  }
}