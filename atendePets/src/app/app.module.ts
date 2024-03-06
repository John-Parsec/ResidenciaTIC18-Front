import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarAtendimentoComponent } from './cadastrar-atendimento/cadastrar-atendimento.component';
import { ListarAtendimentosComponent } from './listar-atendimentos/listar-atendimentos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { AuthComponent } from './auth/auth.component';
import { AutenticaInterceptor } from './autentica.interceptor';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

const rotasApp: Routes = [
  {path: 'cadastro', component: CadastrarAtendimentoComponent},
  {path: 'listar', component: ListarAtendimentosComponent},
  {path: 'detalhes', component: DetalhesComponent},
  {path: 'editar-atendimento', component: EditarComponent},
  {path: 'auth', component: AuthComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CadastrarAtendimentoComponent,
    ListarAtendimentosComponent,
    EditarComponent,
    DetalhesComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(rotasApp)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
