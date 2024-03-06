import { Component } from '@angular/core';
import { ServiceBancoService } from '../service-banco.service'
import { Router } from '@angular/router';
import { Atendimento } from '../atendimento';

@Component({
  selector: 'app-listar-atendimentos',
  templateUrl: './listar-atendimentos.component.html',
  styleUrl: './listar-atendimentos.component.css'
})
export class ListarAtendimentosComponent {
  listaAtendimentos:Atendimento[] = [];

  constructor(private dataService: ServiceBancoService, private router: Router) { }

  ngOnInit() {
    this.getAtendimentos();
  }

  getAtendimentos() {
    this.dataService.getAtendimentos().subscribe(
      (atendimentos: Atendimento[]) => {
        this.listaAtendimentos = atendimentos;
        console.log(this.listaAtendimentos);
      });
  }

  detalharAtendimento(id: string) {
    this.router.navigate(['/detalhes'], { queryParams: { id: id } });
  }

  editarAtendimento(_id: string) {
    this.router.navigate(['/editar-atendimento'], { queryParams: { id: _id } });
  }
}
