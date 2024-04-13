import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: any = {};

  constructor() { }

  storeFormData(data: any) {
    this.formData = { ...this.formData, ...data };
  }

  clearFormData() {
    this.formData = {};
  }

  getFormData() {
    return this.formData;
  }
}
