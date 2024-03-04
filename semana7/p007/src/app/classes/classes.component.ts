import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  name: string = 'Categoria';
  @Input() categories: string[] = [];
  @Output() categoriaSelecionada = new EventEmitter<string>();

  handleSelected(string: string) {
    this.categoriaSelecionada.emit(string);
  }
}
