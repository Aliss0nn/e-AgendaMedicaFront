import { ListarPacienteViewModel } from "../../paciente/models/listar-paciente.view-Model";

export class ListarCirurgiaViewModel{
id: string;
data: string;
horaInicio: string;
horaFinal: string;
pacienteId: ListarPacienteViewModel;

constructor(id: string, data: string, horainicio: string, horafinal: string, pacienteId: ListarPacienteViewModel){
  this.id = id;
  this.data = data;
  this.horaInicio = horainicio;
  this.horaFinal = horafinal;
  this.pacienteId = pacienteId;
}
}