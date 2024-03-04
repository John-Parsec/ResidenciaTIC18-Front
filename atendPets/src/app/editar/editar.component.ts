import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceBancoService } from '../service-banco.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  editarForm: FormGroup;
  id: number | undefined;

  constructor(private dataService: ServiceBancoService, private route: ActivatedRoute, private router: Router){
      this.editarForm = new FormGroup({
        'data':new FormControl(null, Validators.required),
        'tutor':new FormControl(null, Validators.required),
        'nome':new FormControl(null, Validators.required),
        'tipo':new FormControl(null, Validators.required),
        'raca':new FormControl("SRD"),
        'obs':new FormControl(null)
      })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    if(this.id){
      const atendimento = this.dataService.getAtendimento(this.id);
      this.editarForm.patchValue(atendimento);
    }
  }

  onSubmit() {
    if (this.id){
      this.dataService.editAtendimento(this.id, this.editarForm.value);
      this.router.navigate(['/listar']);
    }
  }
}
