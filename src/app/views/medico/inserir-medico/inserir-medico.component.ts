import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsMedicoViewModel } from '../models/forms-medico.View-Model';
import { MedicoService } from '../services/medico.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inserir-medico',
  templateUrl: './inserir-medico.component.html',
  styleUrls: ['./inserir-medico.component.css']
})
export class InserirMedicoComponent implements OnInit{
form!: FormGroup;
medicoVm!: FormsMedicoViewModel;

constructor(
  private formBuilder: FormBuilder,
  private medicoService: MedicoService,
  private router: Router,
  private toastrService: ToastrService
){}

ngOnInit(): void {
this.form = this.formBuilder.group({
  nome: new FormControl('', [Validators.required]),
  telefone: new FormControl('', [Validators.required]),
  cpf: new FormControl('', [Validators.required]),
  cep: new FormControl('', [Validators.required]),
  crm: new FormControl('', [Validators.required]),
})
}

campoEstaInvalido(nome: string) {
  return this.form.get(nome)!.touched && this.form.get(nome)!.invalid;
}

gravar(){
  if (this.form.invalid) {
    for (let erro of this.form.validate()) {
      this.toastrService.warning(erro);
    }

    return;
  }

  this.medicoVm = this.form.value;

  this.medicoService.inserir(this.medicoVm).subscribe({
    next: (medico: FormsMedicoViewModel) => this.processarSucesso(medico),
    error: (err: Error) => this.processarFalha(err)
  });
}
  processarSucesso(medico: FormsMedicoViewModel) {
   this.toastrService.success(
    `O Medico "${medico.nome}" foi cadastrado com sucesso!`,
      'Sucesso'
   );

   this.router.navigate(['/medicos/listar'])
  }

  processarFalha(erro: Error){
    this.toastrService.error(erro.message, 'Error');
  }
}