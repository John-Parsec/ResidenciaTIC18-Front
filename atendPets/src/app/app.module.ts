import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarAtendimentoComponent } from './cadastrar-atendimento/cadastrar-atendimento.component';
import { ListarAtendimentosComponent } from './listar-atendimentos/listar-atendimentos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';

import {HttpClientModule } from '@angular/common/http';
import { DetalhesComponent } from './detalhes/detalhes.component';

const rotasApp: Routes = [
  {path: 'cadastro', component: CadastrarAtendimentoComponent},
  {path: 'listar', component: ListarAtendimentosComponent},
  {path: 'detalhes', component: DetalhesComponent},
  {path: 'editar-atendimento', component: EditarComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CadastrarAtendimentoComponent,
    ListarAtendimentosComponent,
    EditarComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(rotasApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
