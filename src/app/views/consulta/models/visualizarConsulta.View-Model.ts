import { ListarMedicoViewModel } from "../../medico/models/listarMedico.View-Model";
import { ListarPacienteViewModel } from "../../paciente/models/listar-paciente.view-Model";

export class VisualizarConsultaViewModel{
id: string;
data: string;
horaInicio: string;
horaFinal: string;
PacienteId: ListarPacienteViewModel;
MedicoId: ListarMedicoViewModel;
recuperacaoMedico: string;

constructor(id: string, data: string, horaInicio: string, horaFinal: string, PacienteId: ListarPacienteViewModel,
   MedicoId: ListarMedicoViewModel, recuperacaoMedico: string){
  this.id = id;
  this.data = data;
  this.horaInicio = horaInicio;
  this.horaFinal = horaFinal;
  this.PacienteId = PacienteId;
  this.MedicoId = MedicoId;
  this.recuperacaoMedico = recuperacaoMedico;
}
}