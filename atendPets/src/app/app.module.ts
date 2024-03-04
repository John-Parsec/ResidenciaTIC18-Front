import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarAtendimentoComponent } from './cadastrar-atendimento/cadastrar-atendimento.component';
import { ListarAtendimentosComponent } from './listar-atendimentos/listar-atendimentos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';

const rotasApp: Routes = [
  {path: 'cadastro', component: CadastrarAtendimentoComponent},
  {path: 'listar', component: ListarAtendimentosComponent},
  {path: 'editar-atendimento', component: EditarComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CadastrarAtendimentoComponent,
    ListarAtendimentosComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rotasApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
