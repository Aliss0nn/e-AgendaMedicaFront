import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsConsultaViewModel } from '../models/formsConsulta.View-Model';
import { ListarPacienteViewModel } from '../../paciente/models/listar-paciente.view-Model';
import { ListarMedicoViewModel } from '../../medico/models/listarMedico.View-Model';
import { ConsultaService } from '../services/consulta.service';
import { PacienteService } from '../../paciente/services/pacientes.service';
import { MedicoService } from '../../medico/services/medico.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-consulta',
  templateUrl: './inserir-consulta.component.html',
  styleUrls: ['./inserir-consulta.component.css']
})
export class InserirConsultaComponent implements OnInit{
form!: FormGroup;
consultaVm!: FormsConsultaViewModel;
pacientes: ListarPacienteViewModel[] = [];
medicos: ListarMedicoViewModel[] = [];

constructor(private FormBuilder: FormBuilder,
  private consultaService: ConsultaService,
  private pacienteService: PacienteService,
  private medicoService: MedicoService,
  private toastrService: ToastrService,
  private router: Router){}

ngOnInit(): void {
  this.form = this.FormBuilder.group({
    data: new FormControl(new Date(),[Validators.required]),
    horaInicio: new FormControl('08:00',[Validators.required]),
    horaTermino: new FormControl('09:00',[Validators.required]),
    nomePaciente: new FormControl(''),
    nomeMedico: new FormControl(''),
  });

  this.pacienteService.selecionarTodos().subscribe(res => {
    this.pacientes = res;
  });

  this.medicoService.selecionarTodos().subscribe(res =>{
    this.medicos = res;
  });
}


  campoEstaInvalido(nome: string) {
    return this.form.get(nome)!.touched && this.form.get(nome)!.invalid;
  }

  gravar(){
    if(this.form.invalid){
      for(let err of this.form.validate()){
        this.toastrService.warning(err);
      }

      return;
    }
    
   this.consultaVm = this.form.value;

   this.consultaService.inserir(this.consultaVm).subscribe({
    next: (consulta: FormsConsultaViewModel) => this.processarSucesso(consulta),
    error: (erro: Error) => this.processarFalha(erro),
   });
  }

  processarSucesso(consulta: FormsConsultaViewModel){
    this.toastrService.success(`A consulta "${consulta.data} foi cadastrada com Sucesso`,'Sucesso');

    this.router.navigate(['/consultas/listar']);
  }

  processarFalha(erro: Error){
    this.toastrService.error(erro.message, 'Erro');
  }
}