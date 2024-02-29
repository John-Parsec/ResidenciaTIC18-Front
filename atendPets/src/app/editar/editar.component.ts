import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceBancoService } from '../service-banco.service'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  editarForm: FormGroup

  constructor(private dataService: ServiceBancoService){
      this.editarForm = new FormGroup({
        'data':new FormControl(null, Validators.required),
        'tutor':new FormControl(null, Validators.required),
        'nome':new FormControl(null, Validators.required),
        'tipo':new FormControl(null, Validators.required),
        'raca':new FormControl("SRD")
      })
  }

  ngOnInit(): void {}

  onSubmit() {
    this.dataService.addAtendimento(this.editarForm.value);
    this.editarForm.reset();
  }
}
