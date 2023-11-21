export class ListarMedicoViewModel{
id: string;
crm: string;
nome: string;
cpf: string;
cep: string;
telefone: string;

constructor(id: string, crm: string, nome: string, cpf: string, cep: string, telefone: string){
  this.id = id;
  this.crm = crm;
  this.nome = nome;
  this.cpf = cpf;
  this.cep = cep;
  this.telefone = telefone;
}
}