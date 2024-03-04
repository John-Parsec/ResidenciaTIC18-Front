import { Component } from '@angular/core';
import { ServiceBancoService } from '../service-banco.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-atendimentos',
  templateUrl: './listar-atendimentos.component.html',
  styleUrl: './listar-atendimentos.component.css'
})
export class ListarAtendimentosComponent {
  listaAtendimentos = this.dataService.getAtendimentos();

  constructor(private dataService: ServiceBancoService, private rota: Router) { }

  ngOnInit() {
    this.listaAtendimentos = this.dataService.getAtendimentos();
  }

  detalharAtendimento(id: number) {
    this.rota.navigate(['/detalhe', id]);
  }
}
