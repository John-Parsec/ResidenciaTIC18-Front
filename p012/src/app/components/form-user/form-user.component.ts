import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormDataService } from '../../form-data.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})

export class FormUserComponent{
  userForm: FormGroup;

  constructor(private formDataService: FormDataService) {
    this.userForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.maxLength(12)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'full_name': new FormControl(null, [Validators.required]),
      'number': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required]),
      'birthdate': new FormControl(null),
      'gender': new FormControl(null),
      'profession': new FormControl(null)
   });
  }

  onSubmit() {
    console.log(this.userForm);
    if (this.userForm.valid) {
      this.formDataService.storeFormData(this.userForm.value);

      this.userForm.reset();

      console.log(this.formDataService.getFormData());
    }
  }
}