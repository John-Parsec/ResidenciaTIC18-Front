import { Component } from '@angular/core';
import { ServiceBancoService } from '../service-banco.service'

@Component({
  selector: 'app-listar-atendimentos',
  templateUrl: './listar-atendimentos.component.html',
  styleUrl: './listar-atendimentos.component.css'
})
export class ListarAtendimentosComponent {
  listaAtendimentos = this.dataService.getAtendimentos();

  constructor(private dataService: ServiceBancoService) { }
}
