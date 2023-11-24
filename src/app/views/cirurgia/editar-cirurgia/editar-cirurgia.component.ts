import { Component, OnInit } from '@angular/core';
import { ListarPacienteViewModel } from '../../paciente/models/listar-paciente.view-Model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListarMedicoViewModel } from '../../medico/models/listarMedico.View-Model';
import { FormsCirurgiaViewModel } from '../models/formsCirurgia.View-Model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MedicoService } from '../../medico/services/medico.service';
import { PacienteService } from '../../paciente/services/pacientes.service';
import { CirurgiaService } from '../services/cirurgia.service';

@Component({
  selector: 'app-editar-cirurgia',
  templateUrl: './editar-cirurgia.component.html',
  styleUrls: ['./editar-cirurgia.component.css']
})
export class EditarCirurgiaComponent implements OnInit{
  form!: FormGroup;
  medicos: ListarMedicoViewModel[] = [];
  pacientes: ListarPacienteViewModel[] = [];
  cirurgiaVm!: FormsCirurgiaViewModel;
  idSelecionado: string | null = null;

  constructor(
  private pacienteService: PacienteService,
  private medicoService: MedicoService,
  private toastrService: ToastrService,
  private cirurgiaService: CirurgiaService,
  private formBuilder: FormBuilder,
  private router: Router,
  private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      data: new FormControl(new Date(),[Validators.required]),
      horaInicio: new FormControl('08:00',[Validators.required]),
      horaTermino: new FormControl('09:00',[Validators.required]),
      nomePaciente: new FormControl(''),
      medicosSelecionados: new FormControl(''),
     });

     this.idSelecionado = this.route.snapshot.paramMap.get('id');

     if(!this.idSelecionado) return;

     this.cirurgiaService.selecionarPorId(this.idSelecionado).subscribe((res) => {
      this.form.patchValue(res);
     });

     this.medicoService.selecionarTodos().subscribe((res) => {
      this.medicos = res;
     });
  
     this.pacienteService.selecionarTodos().subscribe((res) => {
      this.pacientes = res;
     });
  }

  gravar(){
    if(this.form.invalid){
      for(let err of this.form.validate()){
        this.toastrService.warning(err);
      }

      return;
    }
    
    this.cirurgiaVm = this.form.value;

    const id = this.route.snapshot.paramMap.get('id');

    if(!id) return;

    this.cirurgiaService.editar(id,this.cirurgiaVm).subscribe({
      next: (cirurgia: FormsCirurgiaViewModel) => this.processarSucesso(cirurgia),
      error: (erro: Error) => this.processarFalha(erro),
    });
  }

  processarSucesso(cirurgia: FormsCirurgiaViewModel){
    this.toastrService.success(`A Cirurgia "${cirurgia.data} foi Editada com Sucesso`,'Sucesso');

    this.router.navigate(['/cirurgias/listar']);
  }

  processarFalha(erro: Error){
    this.toastrService.error(erro.message, 'Erro');
  }
}