export class FormsMedicoViewModel{
crm: string;
nome: string;
cpf: string;
cep: string;
telefone: string;

constructor(crm: string, nome: string, cpf: string,
  cep: string, telefone: string){
  this.crm = crm;
  this.nome = nome;
  this.cpf = cpf;
  this.cep = cep;
  this.telefone = telefone;
}
}