import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsMedicoViewModel } from '../models/forms-medico.View-Model';
import { MedicoService } from '../services/medico.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css']
})
export class EditarMedicoComponent implements OnInit{
  form!: FormGroup;
  medicoVm!: FormsMedicoViewModel;
  idSelecionado: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private medicoService: MedicoService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      crm: new FormControl('', [Validators.required]),
    });

    this.route.data.pipe(map((dados) => dados['medico'])).subscribe({
      next: (medico) => this.obterMedico(medico),
      error: (erro) => this.processarFalha(erro)
    });
  }

  gravar(){
    if (this.form.invalid) {
      for (let erro of this.form.validate()) {
        this.toastrService.warning(erro);
      }
      return;
    }

    this.medicoVm = this.form.value;

    const id = this.route.snapshot.paramMap.get('id');

    if(!id) return;

    this.medicoService.Editar(id, this.medicoVm).subscribe({
      next: (medico) => this.processarSucesso(medico),
      error: (erro) => this.processarFalha(erro),
    });
  }

  obterMedico(medico: FormsMedicoViewModel){
    this.medicoVm = medico;
    this.form.patchValue(this.medicoVm);
  }

  processarSucesso(medico: FormsMedicoViewModel) {
    this.toastrService.success(
      `O Medico "${medico.nome}" foi editado com sucesso!`,
      'Sucesso'
    );
  
    this.router.navigate(['/medicos/listar']);
  }
  
  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Error');
  }
}