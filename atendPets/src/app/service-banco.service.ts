import { Injectable } from '@angular/core';
import { Atendimento } from './atendimento';

@Injectable({
  providedIn: 'root'
})
export class ServiceBancoService {

  listaAtendimentos: Atendimento[] = [];
  constructor() { }

  addAtendimento(atendimento: Atendimento) {
    this.listaAtendimentos.push(atendimento);
  }

  getAtendimentos() {
    return this.listaAtendimentos;
  }
}
