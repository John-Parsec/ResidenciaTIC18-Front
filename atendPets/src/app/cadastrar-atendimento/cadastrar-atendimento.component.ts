import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceBancoService } from '../service-banco.service'

@Component({
  selector: 'app-cadastrar-atendimento',
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrl: './cadastrar-atendimento.component.css'
})
export class CadastrarAtendimentoComponent {
  cadastroForm: FormGroup

  constructor(private dataService: ServiceBancoService){
      this.cadastroForm = new FormGroup({
        'data':new FormControl(null, Validators.required),
        'tutor':new FormControl(null, Validators.required),
        'nome':new FormControl(null, Validators.required),
        'tipo':new FormControl(null, Validators.required),
        'raca':new FormControl("SRD")
      })
  }

  ngOnInit(): void {}

  onSubmit() {
    this.dataService.addAtendimento(this.cadastroForm.value);
    this.cadastroForm.reset();
  }
}
