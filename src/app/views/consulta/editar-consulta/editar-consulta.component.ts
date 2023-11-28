import { Component, OnInit } from '@angular/core';
import { ListarMedicoViewModel } from '../../medico/models/listarMedico.View-Model';
import { ListarPacienteViewModel } from '../../paciente/models/listar-paciente.view-Model';
import { FormsConsultaViewModel } from '../models/formsConsulta.View-Model';
import { ConsultaService } from '../services/consulta.service';
import { PacienteService } from '../../paciente/services/pacientes.service';
import { MedicoService } from '../../medico/services/medico.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-consulta',
  templateUrl: './editar-consulta.component.html',
  styleUrls: ['./editar-consulta.component.css']
})
export class EditarConsultaComponent implements OnInit {
  form!: FormGroup;
  consultaVm!: FormsConsultaViewModel;
  idSelecionado: string | null = null;
  pacientes: ListarPacienteViewModel[] = [];
  medicos: ListarMedicoViewModel[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private consultaService: ConsultaService,
    private router: Router,
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private medicoService: MedicoService,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
   this.form = this.formBuilder.group({
    data: new FormControl(new Date()),
    horaInicio: new FormControl(''),
    horaFinal: new FormControl(''),
    Paciente: new FormControl(''),
    Medico: new FormControl(''),
   })

  //  this.idSelecionado = this.route.snapshot.paramMap.get('id');

  //  if(!this.idSelecionado) return;

  //  this.consultaService.SelecionarPorId(this.idSelecionado).subscribe((res) => {
  //   this.form.patchValue(res);
  //  });

   this.pacienteService.selecionarTodos().subscribe(res => {
    this.pacientes = res;
  });

  this.medicoService.selecionarTodos().subscribe(res =>{
    this.medicos = res;
  });
  }
  gravar(){
    if(this.form.invalid){
      for(let err of this.form.validate()){
        this.toastrService.warning(err);
      }

      return;
    }
    
   this.consultaVm = this.form.value;

   const id = this.route.snapshot.paramMap.get('id');

   if (!id) return;

   this.consultaService.Editar(id,this.consultaVm).subscribe({
    next: (consulta: FormsConsultaViewModel) => this.processarSucesso(consulta),
    error: (erro: Error) => this.processarFalha(erro),
   });
  }


  processarSucesso(consulta: FormsConsultaViewModel){
    this.toastrService.success(`A consulta "${consulta.Data} foi editada com Sucesso`,'Sucesso');

    this.router.navigate(['/consultas/listar']);
  }

  processarFalha(erro: Error){
    this.toastrService.error(erro.message, 'Erro');
  }
}