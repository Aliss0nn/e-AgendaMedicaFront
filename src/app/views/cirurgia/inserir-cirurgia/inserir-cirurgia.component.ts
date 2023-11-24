import { Component, OnInit } from '@angular/core';
import { ListarMedicoViewModel } from '../../medico/models/listarMedico.View-Model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListarPacienteViewModel } from '../../paciente/models/listar-paciente.view-Model';
import { PacienteService } from '../../paciente/services/pacientes.service';
import { MedicoService } from '../../medico/services/medico.service';
import { ToastrService } from 'ngx-toastr';
import { CirurgiaService } from '../services/cirurgia.service';
import { Router } from '@angular/router';
import { FormsCirurgiaViewModel } from '../models/formsCirurgia.View-Model';

@Component({
  selector: 'app-inserir-cirurgia',
  templateUrl: './inserir-cirurgia.component.html',
  styleUrls: ['./inserir-cirurgia.component.css']
})
export class InserirCirurgiaComponent implements OnInit{
form!: FormGroup;
medicos: ListarMedicoViewModel[] = [];
pacientes: ListarPacienteViewModel[] = [];
cirurgiaVm!: FormsCirurgiaViewModel;

constructor(
  private pacienteService: PacienteService,
  private medicoService: MedicoService,
  private toastrService: ToastrService,
  private cirurgiaService: CirurgiaService,
  private formBuilder: FormBuilder,
  private router: Router){}

  ngOnInit(): void {
   this.form = this.formBuilder.group({
    data: new FormControl(new Date(),[Validators.required]),
    horaInicio: new FormControl('08:00',[Validators.required]),
    horaTermino: new FormControl('09:00',[Validators.required]),
    nomePaciente: new FormControl(''),
    medicosSelecionados: new FormControl(''),
   });
   
   this.medicoService.selecionarTodos().subscribe((res) => {
    this.medicos = res;
   });

   this.pacienteService.selecionarTodos().subscribe((res) => {
    this.pacientes = res;
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
    this.cirurgiaVm = this.form.value;

    this.cirurgiaService.inserir(this.cirurgiaVm).subscribe({
      next: (cirurgia: FormsCirurgiaViewModel) => this.processarSucesso(cirurgia),
      error: (erro: Error) => this.processarFalha(erro),
    });
  }

  processarSucesso(cirurgia: FormsCirurgiaViewModel){
    this.toastrService.success(`A Cirurgia "${cirurgia.data} foi cadastrada com Sucesso`,'Sucesso');

    this.router.navigate(['/cirurgias/listar']);
  }

  processarFalha(erro: Error){
    this.toastrService.error(erro.message, 'Erro');
  }
}