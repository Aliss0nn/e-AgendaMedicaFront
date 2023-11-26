import { ListarMedicoViewModel } from "../../medico/models/listarMedico.View-Model";
import { ListarPacienteViewModel } from "../../paciente/models/listar-paciente.view-Model";

export class FormsCirurgiaViewModel{
  data: string;
  horaInicio: string;
  horaFinal: string;
  Paciente: ListarPacienteViewModel;
  Medicos: ListarMedicoViewModel[];

  constructor(data: string, horainicio: string, horafinal: string, pacienteId: ListarPacienteViewModel, medicosId: ListarMedicoViewModel[]){
    this.data = data;
    this.horaInicio = horainicio;
    this.horaFinal = horafinal;
    this.Paciente = pacienteId;
    this.Medicos = medicosId;
  }
}