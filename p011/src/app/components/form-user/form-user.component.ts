import moment from 'moment';
import { Component } from '@angular/core';
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
      'full_name': new FormControl(null, [Validators.required, this.nameValidator]),
      'number': new FormControl(null, [Validators.required, this.numberValidator]),
      'address': new FormControl(null, [Validators.required]),
      'birthdate': new FormControl(null, [Validators.required, this.ageValidator]),
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

  nameValidator(): (control: FormControl) => {[s: string]: boolean} | null {
    return (control: FormControl) => {
      if (control.value) {
        const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    
        if (control.value && !nameRegex.test(control.value)) {
          return { 'invalidName': true };
        }
      }
      return null;
    }
  }

  ageValidator(control: FormControl): {[s: string]: boolean} | null {
    const birthdate = moment(control.value, 'YYYY-MM-DD');
    const today = moment();
    const age = today.diff(birthdate, 'years');

    if (isNaN(age) || age < 18) {
      return { 'ageUnder18': true };
    }

    return null;
  }

  numberValidator(control: FormControl): {[s: string]: boolean} | null {
    if (control.value) {
      const phoneNumberRegex = /^[0-9]{10}$/;
    
      if (control.value && !phoneNumberRegex.test(control.value)) {
        return { 'invalidPhoneNumber': true };
      }
    }
    return null;
  }
}