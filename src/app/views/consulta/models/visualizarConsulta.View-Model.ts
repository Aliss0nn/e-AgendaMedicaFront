import { ListarMedicoViewModel } from "../../medico/models/listarMedico.View-Model";
import { ListarPacienteViewModel } from "../../paciente/models/listar-paciente.view-Model";

export class VisualizarConsultaViewModel{
id: string;
data: string;
horaInicio: string;
horaFinal: string;
Paciente: ListarPacienteViewModel;
Medico: ListarMedicoViewModel;

constructor(id: string, data: string, horaInicio: string, horaFinal: string, Paciente: ListarPacienteViewModel,
   Medico: ListarMedicoViewModel){
  this.id = id;
  this.data = data;
  this.horaInicio = horaInicio;
  this.horaFinal = horaFinal;
  this.Paciente = Paciente;
  this.Medico = Medico;
}
}