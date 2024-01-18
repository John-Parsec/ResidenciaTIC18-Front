import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  API_URL = 'https://restcountries.com/';

  constructor() { }

  getCountries(): any{
    return fetch(this.API_URL + 'v3.1/all?fields=name,population')
  }
}
