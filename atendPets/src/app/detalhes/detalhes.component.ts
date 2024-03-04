import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceBancoService } from '../service-banco.service'
import { Atendimento } from '../atendimento';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {
  constructor(private dataService: ServiceBancoService, private route: ActivatedRoute, private router: Router) { }

  id: string = '';
  atendimento: Atendimento = {} as Atendimento;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    if(this.id){
      this.dataService.getAtendimento(this.id).subscribe((response) => {
        this.atendimento = response;
      });
    }
  }

  voltar() {
    this.router.navigate(['/listar']);
  }
}
