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
      'username': new FormControl(null, [Validators.required, Validators.maxLength(12)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'full_name': new FormControl(null, [Validators.required]),
      'number': new FormControl(null, [Validators.required]),
      'adress': new FormControl(null, [Validators.required]),
      'birthdate': new FormControl(null),
      'gender': new FormControl(null),
      'profession': new FormControl(null)
   });
  }

  onSubmit() {
    const user = {
      user_name: this.userForm.value.username,
      password: this.userForm.value.password,
      email: this.userForm.value.email,
      full_name: this.userForm.value.full_name,
      number: this.userForm.value.number,
      adress: this.userForm.value.adress,
      birthdate: this.userForm.value.birthdate,
      gender: this.userForm.value.gender,
      profession: this.userForm.value.profession
    }

    console.log(user);
  }
}