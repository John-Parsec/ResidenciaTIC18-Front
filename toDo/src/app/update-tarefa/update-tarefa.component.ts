import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TarefaState } from '../store/tarefa.reducer';
import { atualizarTarefa } from '../store/tarefa.actions';
import { Tarefa } from '../tarefa.model';

@Component({
  selector: 'app-update-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-tarefa.component.html',
  styleUrl: './update-tarefa.component.css'
})
export class UpdateTarefaComponent {
  @Input() tarefa: Tarefa = {
    id: '',
    descricao: ''
  };

  @Input() tarefaAtualizada: string = '';

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store:Store<TarefaState>) {
  }

  updateTask() {
    const tarefaAtualizada = { ...this.tarefa };

    tarefaAtualizada.descricao = this.tarefaAtualizada;

    this.store.dispatch(atualizarTarefa({ tarefa: tarefaAtualizada }));
  }

  closeAtualizacao() {
    this.close.emit();
  }
}
