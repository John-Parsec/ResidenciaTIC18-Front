import { Atendimento } from './../atendimento';
import { Component, Input} from '@angular/core';

import { ServiceBancoService } from '../service-banco.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrl: './detalhar.component.css'
})
export class DetalharComponent {
  id: number = 0;
  atendimento: Atendimento = {} as Atendimento;

  constructor(private dataService: ServiceBancoService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];
  }
  
  ngOnInit() {
    this.atendimento = this.dataService.getAtendimento(this.id);
  }
  
}
