import { ListarMedicoViewModel } from "../../medico/models/listarMedico.View-Model";
import { ListarPacienteViewModel } from "../../paciente/models/listar-paciente.view-Model";

export class ListarConsultaViewModel{
id: string;
data: Date;
horaInicio: string;
horaFinal: string;
paciente: ListarPacienteViewModel;
medico: ListarMedicoViewModel;


constructor(id: string, data: Date, 
  horaInicio: string, horaFinal: string, 
  Paciente: ListarPacienteViewModel,
   Medico: ListarMedicoViewModel,){
  this.id = id;
  this.data = data;
  this.horaInicio = horaInicio;
  this.horaFinal = horaFinal;
  this.paciente = Paciente;
  this.medico = Medico;
}
}