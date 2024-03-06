import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atendimento } from './atendimento';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceBancoService {

  listaAtendimentos: Atendimento[] = [];
  constructor(private http: HttpClient) { }

  addAtendimento(atendimento: Atendimento) {
    this.http.post('https://p014-ba862-default-rtdb.firebaseio.com/atendimentos.json', atendimento).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAtendimentos() {
    return this.http.get('https://p014-ba862-default-rtdb.firebaseio.com/atendimentos.json').pipe(
      map((response: any) => {
        const atendimentos: Atendimento[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            atendimentos.push({ ...(response as any)[key], id: key });
          }
        }
        return atendimentos;
      }
      )
    );
  }

  getAtendimento(id: string) {
    return this.http.get<Atendimento>(`https://p014-ba862-default-rtdb.firebaseio.com/atendimentos/${id}.json`);
  }

  editAtendimento(id: string, atendimento: Atendimento) {
    this.http.put(`https://p014-ba862-default-rtdb.firebaseio.com/atendimentos/${id}.json`, atendimento).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
