import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../services/pacientes.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsPacienteViewModel } from '../models/forms-paciente.view-model';
import { map } from 'rxjs';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit{
form!: FormGroup;
pacienteVm!: FormsPacienteViewModel;
idSelecionado: string | null = null;

constructor(
  private formBuilder: FormBuilder,
  private pacienteService: PacienteService,
  private toastrService: ToastrService,
  private router: Router,
  private route: ActivatedRoute
){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      cep: new FormControl('',[Validators.required]),
    });

    this.route.data.pipe(map((dados) => dados['paciente'])).subscribe({
      next: (paciente) => this.obterPaciente(paciente),
      error: (erro) => this.processarFalha(erro),
    });
  }

public gravar(){
  if (this.form.invalid) {
    for (let erro of this.form.validate()) {
      this.toastrService.warning(erro);
    }
    return;
  }

  this.pacienteVm = this.form.value;

  const id = this.route.snapshot.paramMap.get('id');

  if(!id) return;

  this.pacienteService.editar(id,this.pacienteVm).subscribe({
    next: (paciente) => this.processarSucesso(paciente),
    error: (err) => this.processarFalha(err),
  });
}

obterPaciente(paciente: FormsPacienteViewModel) {
  this.pacienteVm = paciente;
  this.form.patchValue(this.pacienteVm);
}

processarSucesso(paciente: FormsPacienteViewModel) {
  this.toastrService.success(
    `O paciente "${paciente.nome}" foi editado com sucesso!`,
    'Sucesso'
  );

  this.router.navigate(['/pacientes/listar']);
}

processarFalha(erro: Error) {
  this.toastrService.error(erro.message, 'Error');
}
}