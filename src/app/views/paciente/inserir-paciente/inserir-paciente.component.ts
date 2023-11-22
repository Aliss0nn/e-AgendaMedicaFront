import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsPacienteViewModel } from '../models/forms-paciente.view-model';
import { PacienteService } from '../services/pacientes.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inserir-paciente',
  templateUrl: './inserir-paciente.component.html',
  styleUrls: ['./inserir-paciente.component.css']
})
export class InserirPacienteComponent implements OnInit{
  form!: FormGroup;
  pacienteVM!: FormsPacienteViewModel;
  
  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private router: Router,
    private toastrService: ToastrService,
  ){
  }

  ngOnInit(): void {
   this.form = this.formBuilder.group({
    nome: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    telefone: new FormControl('',[Validators.required]),
    cpf: new FormControl('',[Validators.required]),
    cep: new FormControl('', [Validators.required]),
   });

  }

  campoEstaInvalido(nome: string) {
    return this.form.get(nome)!.touched && this.form.get(nome)!.invalid;
  }

  get email() {
    return this.form.get('email');
  }

  gravar(){
    if(this.form.invalid){
      for(let err of this.form.validate()){
        this.toastrService.warning(err);
      }

      return;
    }

    this.pacienteVM = this.form.value;

    this.pacienteService.inserir(this.pacienteVM).subscribe({
      next: (paciente: FormsPacienteViewModel) => this.processarSucesso(paciente),
      error: (err: Error) => this.processarFalha(err),
    });   
  }

  processarSucesso(paciente: FormsPacienteViewModel){
    this.toastrService.success(
      `O paciente "${paciente.nome}" foi cadastrado com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/pacientes/listar'])
  }

  processarFalha(erro: Error){
    this.toastrService.error(erro.message, 'Error');
  }
}