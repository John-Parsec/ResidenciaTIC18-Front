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
        'raca':new FormControl("SRD"),
        'obs':new FormControl(null)
      })
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.cadastroForm.invalid) {
      return;
    }
    
    const dados = this.cadastroForm.value;
    dados.id = this.dataService.getAtendimentos().length + 1;
    dados.exibirDetalhes = false;

    this.dataService.addAtendimento(dados);
    this.cadastroForm.reset();
    this.cadastroForm.controls['raca'].setValue("SRD");
  }
}
