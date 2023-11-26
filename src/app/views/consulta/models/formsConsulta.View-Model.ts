import { ListarMedicoViewModel } from "../../medico/models/listarMedico.View-Model";
import { ListarPacienteViewModel } from "../../paciente/models/listar-paciente.view-Model";

export class FormsConsultaViewModel{
Data: string;
HoraInicio: string;
HoraFinal: string;
Paciente: ListarPacienteViewModel;
Medico: ListarMedicoViewModel;

constructor(data: string, horaInicio: string, horaFinal: string, PacienteId: ListarPacienteViewModel,
   MedicoId: ListarMedicoViewModel){
  this.Data = data;
  this.HoraInicio = horaInicio;
  this.HoraFinal = horaFinal;
  this.Paciente = PacienteId;
  this.Medico = MedicoId;
}
}