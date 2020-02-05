import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  public accessValidate = {
    name:       ['', [Validators.required]],
    surname:    ['', [Validators.required]],
    nick:       ['', [Validators.required]],
    email:      ['', [Validators.required, Validators.email]],
    password:   ['', [Validators.required, Validators.minLength(3)]],
  };

  constructor(private _fb:FormBuilder) {

  }

  lenghtValidations(error, form):String {

    return (form.minlength) ? error.msg.split('|')[0] + form.minlength.requiredLength + error.msg.split('|')[1] : error.msg;
  }










  // Alerts
  // Error alerts
  alertError(error) {
    Swal.fire({
      icon: error.error.icon,
      title: error.error.title,
      text: error.message,
      footer: error.footer
    });
  }

  // Success alerts
  alertSuccess(response) {
    Swal.fire({
      icon: 'success',
      title: response.title,
      text: response.message,
      footer: response.footer
    });
  }
  
}
