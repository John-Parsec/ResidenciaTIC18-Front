import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent {
  @Input() name: string = '';

  @Input() objetos: string[] = [];
  @Output() objetoSelecionado = new EventEmitter<string>();

  handleSelected(string: string) {
    this.objetoSelecionado.emit(string);
  }

}
