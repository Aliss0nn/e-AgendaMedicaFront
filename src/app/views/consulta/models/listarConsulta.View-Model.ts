import { ListarMedicoViewModel } from "../../medico/models/listarMedico.View-Model";
import { ListarPacienteViewModel } from "../../paciente/models/listar-paciente.view-Model";

export class ListarConsultaViewModel{
id: string;
data: Date;
horaInicio: string;
horaFinal: string;
PacienteId: ListarPacienteViewModel;
MedicoId: ListarMedicoViewModel;


constructor(id: string, data: Date, 
  horaInicio: string, horaFinal: string, 
  PacienteId: ListarPacienteViewModel,
   MedicoId: ListarMedicoViewModel,){
  this.id = id;
  this.data = data;
  this.horaInicio = horaInicio;
  this.horaFinal = horaFinal;
  this.PacienteId = PacienteId;
  this.MedicoId = MedicoId;
}
}