export class FormsPacienteViewModel{
  nome: string;
  telefone: string;
  email: string;
  cpf: string;
  cep: string;

  constructor(nome: string, telefone: string, email: string, cpf: string, cep: string){
    this.nome = nome;
    this.telefone = telefone
    this.email = email;
    this.cpf = cpf;
    this.cep = cep;
  }
}