import { ListarMedicoViewModel } from "../../medico/models/listarMedico.View-Model";
import { ListarPacienteViewModel } from "../../paciente/models/listar-paciente.view-Model";

export class VisualizarCirurgiaViewModel{
  id: string;
  data: string;
  horaInicio: string;
  horaTermino: string;
  paciente: ListarPacienteViewModel;
  medicos: ListarMedicoViewModel[];

  constructor(id: string, data: string, horainicio: string, horafinal: string, pacienteId: ListarPacienteViewModel, medicosId: ListarMedicoViewModel[]){
    this.id = id;
    this.data = data;
    this.horaInicio = horainicio;
    this.horaTermino = horafinal;
    this.paciente = pacienteId;
    this.medicos = medicosId;
  }
}