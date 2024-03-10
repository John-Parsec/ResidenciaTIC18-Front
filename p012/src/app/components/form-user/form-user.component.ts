import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})

export class FormUserComponent{
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      'user_name': new FormControl(null, [Validators.required, Validators.minLength(12)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'full_name': new FormControl(null, [Validators.required]),
      'number': new FormControl(null, [Validators.required]),
      'adress': new FormControl(null, [Validators.required]),
      'birthdate': new FormControl(null),
      'gender': new FormControl(null),
      'occupation': new FormControl(null)
   });
  }

  onSubmit() {
    const user = {
      user_name: this.userForm.value.user_name,
      password: this.userForm.value.password,
      email: this.userForm.value.email,
      full_name: this.userForm.value.full_name,
      number: this.userForm.value.number,
      adress: this.userForm.value.adress,
      birthdate: this.userForm.value.birthdate,
      gender: this.userForm.value.gender,
      occupation: this.userForm.value.occupation
    }

    console.log(user);
  }
}