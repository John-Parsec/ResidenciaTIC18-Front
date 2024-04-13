import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-countries',
  templateUrl: './form-countries.component.html',
  styleUrl: './form-countries.component.css'
})

export class FormCountriesComponent{
  apiURL = 'https://restcountries.com/v3.1/all';
  campos_form: any = [];
  formulario: FormGroup = this.formBuilder.group({});
  
  constructor(private formBuilder: FormBuilder) {
    fetch(this.apiURL)
    .then(response => response.json())
    .then(data => {
      let first = data[0];
  
      for (let key in first) {
        this.campos_form.push({
          tipo: typeof first[key],
          nome: key,
          rotulo: key
        });
      }
      
      this.formulario = this.formBuilder.group({});
      this.campos_form.forEach((campo: { nome: any; }) => {
        this.formulario.addControl(campo.nome, this.formBuilder.control(''));
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  onSubmit() {
    console.log('Formulário enviado');
  }
}
