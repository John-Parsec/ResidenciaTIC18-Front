import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css'
})
export class PropriedadesComponent {
  prop_list: string[] = ['Name', 'Model', 'Engine', 'NumberOfPassengers', 'Autonomia', 'Alcance', 'Teto'];
  @Input() name: string = '';
  @Output() propSelecionada = new EventEmitter<string>();

  monstrarValor(propriedade: string): void{
    this.propSelecionada.emit(propriedade);
  }
}
