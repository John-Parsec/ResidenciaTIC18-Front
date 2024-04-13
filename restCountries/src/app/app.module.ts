import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCountriesComponent } from './components/form-countries/form-countries.component';
import { RouterModule, Routes } from '@angular/router';

const rotas: Routes = [
  { path: 'form-countries', component: FormCountriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormCountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rotas),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
