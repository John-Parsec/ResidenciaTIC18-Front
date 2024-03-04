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

  getAtendimento(id: number): Atendimento {
    const atendimentoEncontrado = this.listaAtendimentos.find(atendimento => atendimento.id === id);
  
    if (atendimentoEncontrado)
      return atendimentoEncontrado;
    else
      return {} as Atendimento;
  }

  editAtendimento(id: number, atendimento: Atendimento) {
    this.listaAtendimentos[id - 1] = atendimento;
  }
}
