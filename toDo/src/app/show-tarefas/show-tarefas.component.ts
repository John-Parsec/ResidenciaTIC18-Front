import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaState } from '../store/tarefa.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectorSelecionaTarefa } from '../store/tarefa.seletors';
import { Tarefa } from '../tarefa.model';
import { removerTarefa } from '../store/tarefa.actions';
import { UpdateTarefaComponent } from '../update-tarefa/update-tarefa.component';

@Component({
  selector: 'app-show-tarefas',
  standalone: true,
  imports: [CommonModule, UpdateTarefaComponent],
  templateUrl: './show-tarefas.component.html',
  styleUrls: ['./show-tarefas.component.css']
})
export class ShowTarefasComponent {
  tarefas: Tarefa[] = [{id: '1', descricao: 'Descrição 1'},];
  tasks$!: Observable<TarefaState>;
  showUpdate = false;
  tarefaSelecionada: Tarefa = {id: '', descricao: ''};

  constructor(private store:Store<{tarefas: TarefaState}>) { }

  ngOnInit() {
    this.tasks$ = this.store.select(selectorSelecionaTarefa);
    this.tasks$.subscribe((t) => {  
      this.tarefas = t.tarefas;
    });
  }

  removeTarefa(id: string) {
    this.store.dispatch(removerTarefa({id: id}));
  }

  updateTarefa(tarefa: Tarefa) {
    this.tarefaSelecionada = tarefa;
    this.showUpdate = true;
  }

  closeUpdate() {
    this.showUpdate = false;
    this.tarefaSelecionada = {id: '', descricao: ''};
  }
}
